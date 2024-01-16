import { withRouter } from "storybook-addon-react-router-v6";
import CardUpdate from "./CardUpdate";
import { Meta } from "@storybook/react";

const meta: Meta<typeof CardUpdate> = {
  title: "Pages/InitialPage/CardPage/CardUpdate",
  component: CardUpdate,
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
