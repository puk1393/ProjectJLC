
import React from "react";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FiltersProvider, useFilters } from "../FilterContext";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <FiltersProvider>{children}</FiltersProvider>
);

describe("useFilters (FiltersContext)", () => {
  it("debe exponer y actualizar los filtros", () => {
    const { result } = renderHook(() => useFilters(), { wrapper });
    act(() => {
      result.current.setSearch("abc");
      result.current.setPriority("alta");
      result.current.setResponsible("yo");
    });
    expect(result.current.search).toBe("abc");
    expect(result.current.priority).toBe("alta");
    expect(result.current.responsible).toBe("yo");
    act(() => {
      result.current.resetFilters();
    });
    expect(result.current.search).toBe("");
    expect(result.current.priority).toBe("");
    expect(result.current.responsible).toBe("");
  });

  it("debe indicar si hay filtros activos", () => {
    const { result } = renderHook(() => useFilters(), { wrapper });
    expect(result.current.hasActiveFilters).toBe(false);
    act(() => {
      result.current.setSearch("x");
    });
    expect(result.current.hasActiveFilters).toBe(true);
  });
});