// .storybook/preview.ts
import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light Mode" },
          { value: "dark", title: "Dark Mode" },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.theme === "dark";
      return (
        <div className={`${isDark ? "dark" : ""} min-h-screen p-4`}>
          <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-lg shadow p-6">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
