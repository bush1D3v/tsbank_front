import { withRouter } from "storybook-addon-react-router-v6";
import Logo from "./Logo";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  title: "Components/Header/Logo",
  component: Logo,
  decorators: [
    withRouter,
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
