import { type Meta } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Styleds/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center mx-[20dvw] py-[50dvh] max-h-[100dvh]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = () => <Button>Click me</Button>;
