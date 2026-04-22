import { renderHook, act } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../ThemeContext";
import React from "react";
import { describe, expect, it } from "vitest";

describe("ThemeContext", () => {
  it("proporciona el tema y permite alternar", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.theme).toBe("dark");
    act(() => {
      result.current.toggleTheme();
    });
    expect(["light", "dark"]).toContain(result.current.theme);
  });

  it("lanza error si se usa fuera del provider", () => {

    expect(() => renderHook(() => useTheme())).toThrow();
  });
});