import React from "react";

interface ColorSwatch {
  name: string;
  className: string;
}

const colors: ColorSwatch[] = [
  { name: "Primary", className: "bg-primary" },
  { name: "Secondary", className: "bg-secondary" },
  { name: "Tertiary", className: "bg-tertiary" },
  { name: "Success", className: "bg-success" },
  { name: "Warning", className: "bg-warning" },
  { name: "Error", className: "bg-error" },
  { name: "Info", className: "bg-info" },
  { name: "Neutral 100", className: "bg-neutral-100" },
  { name: "Neutral 900", className: "bg-neutral-900" },
];

const ColorPalette: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white dark:bg-neutral-900 text-black dark:text-white">
      {colors.map((color) => (
        <div className="flex items-center gap-3" key={color.name}>
          <div
            className={`w-10 h-10 rounded border ${color.className}`}
            title={color.name}
          />
          <span className="text-sm">{color.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;

  