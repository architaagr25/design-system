import Tooltip from "./Tooltip";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: "I'm up",
    position: "top",
    children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    text: "I'm below!",
    position: "bottom",
    children: <span className="underline text-blue-600">Hover me</span>,
  },
};

export const Left: Story = {
    args: {
      text: "I'm Left",
      position: "left",
      children: <button className="px-4 py-2 bg-primary text-white rounded">Hover me</button>,
    },
  };
  
  export const Right: Story = {
    args: {
      text: "I'm Right!",
      position: "right",
      children: <span className="underline text-blue-600">Hover me</span>,
    },
};