import { Meta } from "@storybook/react";
import NavLinks from "./NavLinks";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof NavLinks> = {
  title: "Components/Header/NavLinks",
  component: NavLinks,
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
