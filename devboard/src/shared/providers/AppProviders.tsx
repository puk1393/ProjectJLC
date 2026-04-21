import type { ReactNode } from "react";
import { ThemeProvider } from "@/shared/context/ThemeContext";
import { AuthProvider } from "@/shared/context/AuthContext";
import { FiltersProvider } from "@/shared/context/FilterContext";

interface Props {
  children: ReactNode;
}

export function AppProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FiltersProvider>
          {children}
        </FiltersProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}