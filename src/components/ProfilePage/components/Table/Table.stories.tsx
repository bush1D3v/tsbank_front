import { withRouter } from "storybook-addon-react-router-v6";
import Table from "./Table";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "Pages/ProfilePage/Table",
  component: Table,
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
