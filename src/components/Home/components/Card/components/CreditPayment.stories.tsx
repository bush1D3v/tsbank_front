import { withRouter } from "storybook-addon-react-router-v6";
import CreditPayment from "./CreditPayment";
import { Meta } from "@storybook/react";

const meta: Meta<typeof CreditPayment> = {
  title: "Pages/InitialPage/CardPage/CreditPayment",
  component: CreditPayment,
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
