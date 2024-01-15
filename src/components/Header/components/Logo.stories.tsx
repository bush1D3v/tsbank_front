import { withRouter } from "storybook-addon-react-router-v6";
import Logo from "./Logo";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  title: "Components/Header/Logo",
  component: Logo,
  decorators: [
    withRouter,
    (Story) => (
      <div className="max-h-[100dvh] flex items-center justify-center py-[50dvh]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
