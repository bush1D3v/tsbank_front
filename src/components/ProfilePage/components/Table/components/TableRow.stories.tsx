import { withRouter } from "storybook-addon-react-router-v6";
import TableRow from "./TableRow";
import { type Meta, type StoryObj } from "@storybook/react";

const meta: Meta<typeof TableRow> = {
  title: "Pages/ProfilePage/Table/TableRow",
  component: TableRow,
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

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    label: "Email",
    value: "emailDeTeste@gmail.com"
  }
};
