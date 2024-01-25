import BalanceDivision from "./BalanceDivision";
import { type Meta } from "@storybook/react";

const meta: Meta<typeof BalanceDivision> = {
  title: "Pages/InitialPage/BalanceDivision",
  component: BalanceDivision,
  decorators: [
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = () => <BalanceDivision balance="$1,000,000.00" />;
