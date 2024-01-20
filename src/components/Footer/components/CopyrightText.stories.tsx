import { type Meta } from "@storybook/react";
import CopyrightText from "./CopyrightText";

const meta: Meta<typeof CopyrightText> = {
  title: "Layout/Footer/CopyrightText",
  component: CopyrightText,
  decorators: [
    (Story) => (
      <div className="flex h-[100dvh] items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
