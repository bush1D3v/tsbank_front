import { Meta } from "@storybook/react";
import Profile from "./Profile";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof Profile> = {
  title: "Components/Header/Profile",
  component: Profile,
  decorators: [
    withRouter,
    (Story) => (
      <div className="flex items-center justify-center text-9xl">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
