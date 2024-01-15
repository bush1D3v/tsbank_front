import { Meta } from "@storybook/react";
import Skeleton from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/ImageSkeletonLoader/Skeleton",
  component: Skeleton,
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
