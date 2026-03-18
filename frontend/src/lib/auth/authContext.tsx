"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { setAccessToken } from "@/lib/api/client";
import apiClient from "@/lib/api/client";

interface User {
  id: string;
  fullName: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Tenta fazer refresh ao carregar a app
  useEffect(() => {
    const initAuth = async () => {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        setIsLoading(false);
        return;
      }

      try {
        const { data } = await apiClient.post("/api/Auth/refresh", {
          refreshToken,
        });
        setAccessToken(data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setUser(data.user);
      } catch {
        localStorage.removeItem("refreshToken");
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await apiClient.post("/api/Auth/login", {
      email,
      password,
    });
    setAccessToken(data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    setUser(data.user);
  };

  const register = async (fullName: string, email: string, password: string) => {
    const { data } = await apiClient.post("/api/Auth/register", {
      fullName,
      email,
      password,
    });
    setAccessToken(data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    setUser(data.user);
  };

  const logout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      await apiClient.post("/api/Auth/logout", { refreshToken });
    }
    setAccessToken(null);
    localStorage.removeItem("refreshToken");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
