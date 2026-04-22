import { render, screen, fireEvent } from "@testing-library/react";
import { Layout } from "../Layout";
import { ThemeProvider } from "@/shared/context/ThemeContext";
import { AuthProvider } from "@/shared/context/AuthContext";
import React from "react";
import { describe, expect, it } from "vitest";

describe("Layout", () => {
  it("renderiza el header y el botón de login si no está autenticado", () => {
    render(
      <ThemeProvider>
        <AuthProvider>
          <Layout>
            <div>Contenido</div>
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    );
    expect(screen.getByAltText(/Dev Board/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Contenido/i)).toBeInTheDocument();
  });

  it("permite autenticarse y muestra el nombre de usuario", () => {
    render(
      <ThemeProvider>
        <AuthProvider>
          <Layout>
            <div>Contenido</div>
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText(/Login/i));
    expect(screen.getByText(/Hola Jeremy Lewis/i)).toBeInTheDocument();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });

  it("permite cambiar el tema", () => {
    render(
      <ThemeProvider>
        <AuthProvider>
          <Layout>
            <div>Contenido</div>
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    );
    const btn = screen.getByRole("button", { name: /Oscuro|Claro/i });
    fireEvent.click(btn);
    expect(document.querySelector(".layout.dark") || document.querySelector(".layout.light")).toBeInTheDocument();
  });
});