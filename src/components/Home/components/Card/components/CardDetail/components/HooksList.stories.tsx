import { withRouter } from "storybook-addon-react-router-v6";
import HooksList from "./HooksList";
import { type Meta } from "@storybook/react";

const meta: Meta<typeof HooksList> = {
  title: "Pages/InitialPage/CardPage/CardDetail/HooksList",
  component: HooksList,
  decorators: [
    withRouter,
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center px-[5dvw]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
