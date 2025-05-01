import ColorPalette from "./ColorPalette";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorPalette> = {
  title: "Design System/ColorPalette",
  component: ColorPalette,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const AllColors: Story = {
  render: () => <ColorPalette />,
};
