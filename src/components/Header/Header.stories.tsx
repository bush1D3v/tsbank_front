import { withRouter } from "storybook-addon-react-router-v6";
import Header from "./Header";
import { type Meta } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  decorators: [
    withRouter,
    (Story) => (
      <div className="h-[100dvh] py-[50dvh]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
