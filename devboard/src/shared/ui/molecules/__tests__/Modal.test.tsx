import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Modal } from "../Modal";

describe("Modal", () => {
  it("opens modal when clicking trigger", () => {
    render(
      <Modal>
        <Modal.Trigger>
          <button>Abrir</button>
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Header>Título</Modal.Header>
          <Modal.Body>Contenido</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal.Content>
      </Modal>
    );

    expect(screen.queryByText("Contenido")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Abrir"));

    expect(screen.getByText("Contenido")).toBeInTheDocument();
    expect(screen.getByText("Título")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("closes modal when clicking Cerrar", () => {
    render(
      <Modal>
        <Modal.Trigger>
          <button>Abrir</button>
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Body>Contenido</Modal.Body>
        </Modal.Content>
      </Modal>
    );

    fireEvent.click(screen.getByText("Abrir"));
    expect(screen.getByText("Contenido")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cerrar"));

    expect(
      screen.queryByText("Contenido")
    ).not.toBeInTheDocument();
  });

  it("throws error if used outside Modal provider", () => {
    expect(() =>
      render(
        <Modal.Content>
          <div>Hola</div>
        </Modal.Content>
      )
    ).toThrow("Favor utilizar el modal correctamente");
  });
});