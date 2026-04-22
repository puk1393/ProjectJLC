import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useDebounce } from "../useDebounce";

describe("useDebounce", () => {
  it("debe devolver el valor después del delay", () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: "hola", delay: 300 },
    });

    expect(result.current).toBe("hola");
    rerender({ value: "nuevo", delay: 300 });
    expect(result.current).toBe("hola");

    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(result.current).toBe("nuevo");
    vi.useRealTimers();
  });

  it("debe actualizar el valor si el delay cambia", () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: "a", delay: 500 },
    });
    rerender({ value: "b", delay: 100 });
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current).toBe("b");
    vi.useRealTimers();
  });
});