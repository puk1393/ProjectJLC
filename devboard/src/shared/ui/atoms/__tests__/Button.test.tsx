import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Guardar</Button>);

    expect(
      screen.getByRole("button", { name: "Guardar" })
    ).toBeInTheDocument();
  });

  it("uses default variant and size", () => {
    render(<Button>Default</Button>);

    const button = screen.getByRole("button", {
      name: "Default",
    });

    expect(button).toHaveStyle({
      backgroundColor: "rgb(37, 99, 235)",
      color: "rgb(255, 255, 255)",
      padding: "6px 12px",
      fontSize: "14px",
    });
  });

  it("renders danger variant", () => {
    render(<Button variant="danger">Eliminar</Button>);

    const button = screen.getByRole("button", {
      name: "Eliminar",
    });

    expect(button).toHaveStyle({
      backgroundColor: "rgb(220, 38, 38)",
    });
  });

  it("renders secondary variant", () => {
    render(<Button variant="secondary">Cancelar</Button>);

    const button = screen.getByRole("button", {
      name: "Cancelar",
    });

    expect(button).toHaveStyle({
      backgroundColor: "rgb(3, 104, 70)",
    });
  });

  it("renders large size", () => {
    render(<Button size="lg">Grande</Button>);

    const button = screen.getByRole("button", {
      name: "Grande",
    });

    expect(button).toHaveStyle({
      padding: "10px 16px",
      fontSize: "16px",
    });
  });

  it("calls onClick when pressed", () => {
    const onClick = vi.fn();

    render(
      <Button onClick={onClick}>
        Click me
      </Button>
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Click me",
      })
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("passes disabled prop", () => {
    render(<Button disabled>Disabled</Button>);

    expect(
      screen.getByRole("button", {
        name: "Disabled",
      })
    ).toBeDisabled();
  });
});