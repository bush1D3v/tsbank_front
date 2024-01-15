import { Meta, StoryObj } from "@storybook/react";
import ImageSkeletonLoader from "./ImageSkeletonLoader";

const meta: Meta<typeof ImageSkeletonLoader> = {
  title: "Components/ImageSkeletonLoader",
  component: ImageSkeletonLoader,
  argTypes: {
    loading: {
      control: {
        type: "select"
      }
    }
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center h-[100dvh]">
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof ImageSkeletonLoader>;

export const Default: Story = {
  args: {
    alt: "Placeholder",
    src: "https://via.placeholder.com/500",
    loading: "eager",
    sessionStorageItem: "imageLoaded"
  }
};
