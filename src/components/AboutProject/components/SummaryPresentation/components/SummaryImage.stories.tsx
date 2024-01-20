import { type Meta } from "@storybook/react";
import SummaryImage from "./SummaryImage";

const meta: Meta<typeof SummaryImage> = {
  title: "Pages/AboutProjectPage/SummaryPresentation/SummaryImage",
  component: SummaryImage,
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
