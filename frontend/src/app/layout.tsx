import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth/authContext";
import { ThemeProvider } from "@/lib/theme/themeContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "Task management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}