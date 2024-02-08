import { type Meta } from "@storybook/react";
import PolicyAndTerms from "./PolicyAndTerms";

const meta: Meta<typeof PolicyAndTerms> = {
  title: "Layout/Footer/PolicyAndTerms",
  component: PolicyAndTerms,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
