'use client';

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "../Input";

describe("Input", () => {
  it("renders input with default props", () => {
    render(<Input placeholder="Escribe aquí" />);

    const input = screen.getByPlaceholderText("Escribe aquí");

    expect(input).toBeInTheDocument();
  });

  it("applies error variant and large size", () => {
    render(
      <Input
        placeholder="Correo"
        variant="error"
        inputSize="lg"
      />
    );

    const input = screen.getByPlaceholderText("Correo");

    expect(input).toHaveStyle({
      backgroundColor: "#fee2e2",
      fontSize: "16px",
      padding: "10px 14px"
    });
  });

  it("applies success variant", () => {
    render(
      <Input
        placeholder="Nombre"
        variant="success"
      />
    );

    const input = screen.getByPlaceholderText("Nombre");

    expect(input).toHaveStyle({
      backgroundColor: "#dcfce7"
    });
  });
});