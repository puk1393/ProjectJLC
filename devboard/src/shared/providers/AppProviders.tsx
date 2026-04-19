import type { ReactNode } from "react";
import { ThemeProvider } from "@/shared/context/ThemeContext";
import { AuthProvider } from "@/shared/context/AuthContext";

interface Props {
  children: ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}