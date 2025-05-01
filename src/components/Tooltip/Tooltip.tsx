import React, { useState, useRef } from "react";

export interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

const positionClasses = {
  top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
  bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
  left: "right-full mr-2 top-1/2 -translate-y-1/2",
  right: "left-full ml-2 top-1/2 -translate-y-1/2",
};

const Tooltip: React.FC<TooltipProps> = ({ text, position = "top", children }) => {
  const [visible, setVisible] = useState(false);
  const tooltipId = useRef(`tooltip-${Math.random().toString(36).substring(2, 9)}`);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        aria-describedby={tooltipId.current}
        tabIndex={0}
        className="cursor-pointer outline-none"
      >
        {children}
      </div>

      {visible && (
        <div
          id={tooltipId.current}
          role="tooltip"
          className={`absolute z-10 px-3 py-1 text-sm text-white bg-neutral-900 rounded shadow-lg whitespace-nowrap ${positionClasses[position]}`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
