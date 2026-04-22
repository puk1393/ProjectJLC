import { renderHook, act } from "@testing-library/react";
import { AuthProvider, useAuth } from "../AuthContext";
import React from "react";
import { describe, expect, it } from "vitest";

describe("AuthContext", () => {
  it("proporciona estado de autenticación y login/logout", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current.isAuthenticated).toBe(false);
    act(() => {
      result.current.login();
    });
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.user?.name).toBe("Jeremy Lewis");
    act(() => {
      result.current.logout();
    });
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.user).toBeNull();
  });
});