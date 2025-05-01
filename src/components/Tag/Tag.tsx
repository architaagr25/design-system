import React from "react";

export type TagColor = "primary" | "success" | "error" | "warning" | "info";

export interface TagProps {
  label: string;
  color?: TagColor;
  disabled?: boolean;
}

const colorMap: Record<TagColor, string> = {
  primary: "bg-primary",
  success: "bg-success",
  error: "bg-error",
  warning: "bg-warning",
  info: "bg-info",
};

const Tag: React.FC<TagProps> = ({ label, color = "primary", disabled }) => (
  <span
    className={`inline-block px-3 py-1 text-sm font-medium rounded-full text-white ${colorMap[color]} ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
    aria-disabled={disabled}
  >
    {label}
  </span>
);

export default Tag;
