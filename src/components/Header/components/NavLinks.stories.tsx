import { Meta } from "@storybook/react";
import NavLinks from "./NavLinks";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof NavLinks> = {
  title: "Layout/Header/NavLinks",
  component: NavLinks,
  decorators: [
    withRouter,
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center py-[50dvh]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
