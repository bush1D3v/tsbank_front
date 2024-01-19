import { Meta } from "@storybook/react";
import {
  FormWrapper,
  Button,
  InputField
} from "./index";

const meta: Meta<typeof FormWrapper> = {
  title: "Components/Styleds/FormWrapper",
  component: FormWrapper,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center m-auto h-[100dvh] w-[50dvw]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = () =>
  <FormWrapper onSubmit={(e) => e.preventDefault()}>
    <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl">Form Example</h2>
    <InputField
      type="email"
      placeholder="Email"
    />
    <Button>Submit</Button>
  </FormWrapper>;
