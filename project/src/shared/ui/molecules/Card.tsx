import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
  <div  style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        backgroundColor: "#fff",
        marginBottom: "8px",
      }}>
      {children}
    </div>
  );
};