import { withRouter } from "storybook-addon-react-router-v6";
import Register from "./Register";
import { type Meta } from "@storybook/react";

const meta: Meta<typeof Register> = {
  title: "Components/FormAuth/Register",
  component: Register,
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
