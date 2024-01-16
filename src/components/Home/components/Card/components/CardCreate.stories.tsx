import { withRouter } from "storybook-addon-react-router-v6";
import CardCreate from "./CardCreate";
import { Meta } from "@storybook/react";

const meta: Meta<typeof CardCreate> = {
  title: "Pages/InitialPage/CardPage/CardCreate",
  component: CardCreate,
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
