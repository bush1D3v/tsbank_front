import { withRouter } from "storybook-addon-react-router-v6";
import Login from "./Login";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Login> = {
  title: "Components/FormAuth/Login",
  component: Login,
  decorators: [
    withRouter,
    (Story) => (
      <div className="flex h-[100dvh] items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
