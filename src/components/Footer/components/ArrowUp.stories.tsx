import { Meta } from "@storybook/react";
import ArrowUp from "./ArrowUp";

const meta: Meta<typeof ArrowUp> = {
  title: "Components/Footer/ArrowUp",
  component: ArrowUp,
  decorators: [
    (Story) => (
      <div className="h-[100dvh] py-[50dvh] px-[50dvw]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
