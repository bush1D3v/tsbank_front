import { withRouter } from "storybook-addon-react-router-v6";
import Deposit from "./Deposit";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Deposit> = {
  title: "Pages/InitialPage/Deposit",
  component: Deposit,
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
