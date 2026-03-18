"use client";

import { createContext, useContext, useState, useMemo } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";

interface ThemeContextType {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  mode: "light",
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
