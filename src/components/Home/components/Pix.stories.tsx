import { withRouter } from "storybook-addon-react-router-v6";
import Pix from "./Pix";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Pix> = {
  title: "Pages/InitialPage/Pix",
  component: Pix,
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
