'use client';

import type { ReactNode } from "react";
import { Button } from "@/shared/ui/atoms";
import { useTheme } from "@/shared/context/ThemeContext";
import { useAuth } from "@/shared/context/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({children,}: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const {
    user,
    isAuthenticated,
    login,
    logout,
  } = useAuth();

  return (
    <div className={`layout ${theme}`}>
      <header className="layout-header">
        <h1 className="layout-title">Dev Board</h1>

        <nav className="layout-nav">
          <Button
            variant="secondary"
            size="md"
            onClick={toggleTheme}
          >
            {theme === "light"
              ? "🌙 Oscuro"
              : "☀️ Claro"}
          </Button>

          {isAuthenticated ? (
            <>
              <span>
                Hola {user?.name}
              </span>

              <Button
                variant="danger"
                size="md"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              size="md"
              onClick={login}
            >
              Login
            </Button>
          )}
        </nav>
      </header>

      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}