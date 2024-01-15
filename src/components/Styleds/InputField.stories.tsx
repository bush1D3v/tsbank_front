import { Meta } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/Styleds/InputField",
  component: InputField,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center py-[50dvh] mx-[20dvw] h-[100dvh]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = () =>
  <InputField
    type="email"
    placeholder="Email"
  />;
