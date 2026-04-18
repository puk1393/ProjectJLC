import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: "#2563eb",
    color: "white",
  },
  secondary: {
    backgroundColor: "#036846",
    color: "white",
  },
  danger: {
    backgroundColor: "#dc2626",
    color: "white",
  }
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "4px 8px", fontSize: "12px" },
  md: { padding: "6px 12px", fontSize: "14px" },
  lg: { padding: "10px 16px", fontSize: "16px" },
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      style={{
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      {...props}
    >
      {children}
    </button>
  );
};