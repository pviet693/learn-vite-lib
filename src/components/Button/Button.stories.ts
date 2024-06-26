import type { Meta, StoryObj } from "@storybook/react";
import { IconTypes } from "../Icon/Icon";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
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
export const Basic: Story = {
    args: {
        children: "Button"
    }
};

export const IconButton: Story = {
    // render: () => (
    //     <Button>{"Icon Button"}</Button>
    // )
    args: {
        children: "Icon Button",
        icon: IconTypes.Plus
    }
};
