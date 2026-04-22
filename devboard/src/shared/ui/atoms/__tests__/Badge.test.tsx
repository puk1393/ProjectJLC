import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "../Badge";

describe("Badge", () => {
  it("debe renderizar el texto correctamente", () => {
    render(<Badge>Hola</Badge>);
    expect(screen.getByText("Hola")).toBeInTheDocument();
  });

  it("debe aplicar el estilo por defecto", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge).toHaveStyle({ backgroundColor: "#e5e7eb", color: "#1f2937" });
  });

  it("debe aplicar el estilo de éxito", () => {
    render(<Badge variant="success">Éxito</Badge>);
    const badge = screen.getByText("Éxito");
    expect(badge).toHaveStyle({ backgroundColor: "#bbf7d0", color: "#166534" });
  });

  it("debe aplicar el estilo de advertencia", () => {
    render(<Badge variant="warning">Alerta</Badge>);
    const badge = screen.getByText("Alerta");
    expect(badge).toHaveStyle({ backgroundColor: "#fef08a", color: "#854d0e" });
  });

  it("debe aplicar el estilo de error", () => {
    render(<Badge variant="error">Error</Badge>);
    const badge = screen.getByText("Error");
    expect(badge).toHaveStyle({ backgroundColor: "#fecaca", color: "#7f1d1d" });
  });
});