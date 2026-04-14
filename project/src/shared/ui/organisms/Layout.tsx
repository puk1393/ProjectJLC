import type { ReactNode } from "react";
import { Button } from '@/shared/ui/atoms';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1 className="layout-title">Dev Board</h1>
        <nav className="layout-nav">
          <Button variant="primary" size="md" onClick={() => alert("Saliendo...")}>Salir</Button>
        </nav>
      </header>
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}