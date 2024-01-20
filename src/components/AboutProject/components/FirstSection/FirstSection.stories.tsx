import { type Meta } from "@storybook/react";
import FirstSection from "./FirstSection";

const meta: Meta<typeof FirstSection> = {
  title: "Pages/AboutProjectPage/FirstSection",
  component: FirstSection,
  decorators: [
    (Story) => (
      <div className="mt-20 flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
