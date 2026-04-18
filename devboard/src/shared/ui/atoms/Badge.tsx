import type { ReactNode } from "react";

type BadgeVariant = "default" | "success" | "warning" | "error";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: { backgroundColor: "#e5e7eb", color: "#1f2937" },
  success: { backgroundColor: "#bbf7d0", color: "#166534" },
  warning: { backgroundColor: "#fef08a", color: "#854d0e" },
  error:   { backgroundColor: "#fecaca", color: "#7f1d1d" },
};

export const Badge = ({ children, variant = "default" }: BadgeProps) => {
  return (
    <span style={{
      padding: "4px 8px",
      borderRadius: "6px",
      fontSize: "12px",
      fontWeight: 500,
      ...variantStyles[variant],
    }}>
      {children}
    </span>
  );
};