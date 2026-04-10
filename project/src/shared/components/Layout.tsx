import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      <header
        style={{
          backgroundColor: "#1e293b",
          color: "#fff",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "20px", color:"white" }}>Dev Board</h1>
        <nav style={{ display: "flex", gap: "16px" }}>
          <span>Jeremy</span>
          <span>Lewis</span>
        </nav>
      </header>
      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "24px" }}>
        {children}
      </main>
    </div>
  );
}
