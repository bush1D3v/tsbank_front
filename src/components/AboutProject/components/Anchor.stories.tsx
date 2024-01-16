import { withRouter } from "storybook-addon-react-router-v6";
import Anchor from "./Anchor";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Anchor> = {
  title: "Pages/AboutProjectPage/Anchor",
  component: Anchor,
  decorators: [
    withRouter,
    (Story) => (
      <div className="flex h-[100dvh] items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    text: "Learn more",
    link: "https://www.google.com/"
  }
};
