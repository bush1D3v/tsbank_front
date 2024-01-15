import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    setOpen: () => { window.alert("The modal has been closed!"); },
    title: "Something went wrong!",
    description: "Error 401: Invalid email and/or password.",
    btnMessage: "Try again"
  }
};
