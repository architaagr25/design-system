// .storybook/preview.ts
import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Choose light or dark mode",
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
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === "dark";

      return (
        <div className={isDark ? "dark" : ""}>
          <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white transition-colors duration-300 p-6">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
