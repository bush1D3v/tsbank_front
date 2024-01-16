import { withRouter } from "storybook-addon-react-router-v6";
import Withdraw from "./Withdraw";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Withdraw> = {
  title: "Pages/InitialPage/Withdraw",
  component: Withdraw,
  decorators: [
    withRouter,
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
