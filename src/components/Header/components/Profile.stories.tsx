import { Meta } from "@storybook/react";
import Profile from "./Profile";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof Profile> = {
  title: "Components/Header/Profile",
  component: Profile,
  decorators: [
    withRouter,
    (Story) => (
      <div className="h-[100dvh] p-[25dvw]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
