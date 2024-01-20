import { type Meta } from "@storybook/react";
import SummaryPresentation from "./SummaryPresentation";

const meta: Meta<typeof SummaryPresentation> = {
  title: "Pages/AboutProjectPage/SummaryPresentation",
  component: SummaryPresentation,
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
