// src/stories/ThemeToggle.stories.tsx
import ThemeToggle from "../components/ThemeToggle";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ThemeToggle> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  render: () => <ThemeToggle />,
};
