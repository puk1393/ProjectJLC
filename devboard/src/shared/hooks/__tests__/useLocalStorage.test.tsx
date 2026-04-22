import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useLocalStorage } from "../useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("debe leer el valor inicial si no hay nada en localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("clave", "valor"));
    expect(result.current[0]).toBe("valor");
  });

  it("debe leer el valor de localStorage si existe", () => {
    localStorage.setItem("clave", JSON.stringify("guardado"));
    const { result } = renderHook(() => useLocalStorage("clave", "valor"));
    expect(result.current[0]).toBe("guardado");
  });

  it("debe actualizar el valor y persistir en localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("clave", "valor"));
    act(() => {
      result.current[1]("nuevo");
    });
    expect(result.current[0]).toBe("nuevo");
    expect(localStorage.getItem("clave")).toBe(JSON.stringify("nuevo"));
  });

  it("debe manejar JSON inválido en localStorage", () => {
    localStorage.setItem("clave", "INVALID_JSON");
    const { result } = renderHook(() => useLocalStorage("clave", "valor"));
    expect(result.current[0]).toBe("valor");
  });
});