import { Meta, StoryObj } from "@storybook/react";
import AnchorLink from "./AnchorLink";

const meta: Meta<typeof AnchorLink> = {
  title: "Components/AnchorLink",
  component: AnchorLink,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center mx-[30dvw] md:mx-[40dvw] h-[100dvh]">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof AnchorLink>;

export const Default: Story = {
  args: {
    func: () => { },
    text: "Button",
    param: "test",
    buttonBg: "bg-saturatedBlue hover:bg-transparent"
  }
};
