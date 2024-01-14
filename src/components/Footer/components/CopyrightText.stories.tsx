import { Meta } from "@storybook/react";
import CopyrightText from "./CopyrightText";

const meta: Meta<typeof CopyrightText> = {
  title: "Components/Footer/CopyrightText",
  component: CopyrightText,
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
