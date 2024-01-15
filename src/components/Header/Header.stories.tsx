import { withRouter } from "storybook-addon-react-router-v6";
import Header from "./Header";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
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