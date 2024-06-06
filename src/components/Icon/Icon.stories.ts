import type { Meta, StoryObj } from "@storybook/react";
import Icon, { IconTypes } from "./Icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Icon> = {
    title: "Components/Icon",
    component: Icon,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {},
    args: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Plus: Story = {
    args: {
        width: 100,
        height: 100,
        fill: "#000",
        type: IconTypes.Plus
    }
};
