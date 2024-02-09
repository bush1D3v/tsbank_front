import { type Meta } from "@storybook/react";
import DedicationText from "./DedicationText";

const meta: Meta<typeof DedicationText> = {
  title: "Layout/Footer/DedicationText",
  component: DedicationText,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-[100dvh]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
