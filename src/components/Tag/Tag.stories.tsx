import Tag from "./Tag";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: { label: "Primary Tag", color: "primary" },
};

export const Disabled: Story = {
  args: { label: "Disabled Tag", color: "error", disabled: true },
};
