//valida lógica reutilizable del hook personalizado.
import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useAsync } from "../useAsync";

describe("useAsync", () => {
  it("loads data successfully", async () => {
    const { result } = renderHook(() =>
      useAsync(async () => {
        return "Datos cargados";
      }, [])
    );

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBe("Datos cargados");
    expect(result.current.error).toBe(null);
  });

  it("handles error correctly", async () => {
    const { result } = renderHook(() =>
      useAsync(async () => {
        throw new Error("Falló");
      }, [])
    );

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe("Error cargando datos");
    expect(result.current.data).toBe(null);
  });
});