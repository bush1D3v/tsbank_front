import { Meta } from "@storybook/react";
import ArrowUp from "./ArrowUp";

const meta: Meta<typeof ArrowUp> = {
  title: "Components/Footer/ArrowUp",
  component: ArrowUp,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
