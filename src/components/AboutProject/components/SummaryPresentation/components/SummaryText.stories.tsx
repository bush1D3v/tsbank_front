import { type Meta } from "@storybook/react";
import SummaryText from "./SummaryText";

const meta: Meta<typeof SummaryText> = {
  title: "Pages/AboutProjectPage/SummaryPresentation/SummaryText",
  component: SummaryText,
  decorators: [
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
