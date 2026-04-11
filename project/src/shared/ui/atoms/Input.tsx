import type { InputHTMLAttributes } from "react";

type InputVariant = "default" | "error" | "success";
type InputSize = "sm" | "md" | "lg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  inputSize?: InputSize;
}

const variantStyles: Record<InputVariant, React.CSSProperties> = {
  default: {
    border: "1px solid #ccc",
  },
  error: {
    border: "1px solid #dc2626",
    backgroundColor: "#fee2e2",
  },
  success: {
    border: "1px solid #16a34a",
    backgroundColor: "#dcfce7",
  },
};

const inputStyles: Record<InputSize, React.CSSProperties> = {
  sm: { padding: "4px 8px", fontSize: "12px" },
  md: { padding: "6px 10px", fontSize: "14px" },
  lg: { padding: "10px 14px", fontSize: "16px" },
};

export const Input = ({
  variant = "default",
  inputSize = "md",
  ...props
}: InputProps) => {
  return (
    <input
      {...props}
      style={{
        borderRadius: "6px",
        outline: "none",
        width: "100%",
        ...variantStyles[variant],
        ...inputStyles[inputSize],
      }}
    />
  );
};