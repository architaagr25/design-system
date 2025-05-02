// .storybook/preview.ts
// .storybook/preview.tsx
import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";

// Decorator to apply dark mode class conditionally
const preview: Preview = {
  parameters: {},
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      return (
        <div className={theme === "dark" ? "dark" : ""}>
          <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white p-6 transition-colors duration-300">
            <Story />
          </div>
        </div>
      );
    },
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
