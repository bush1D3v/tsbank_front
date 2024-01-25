import LoadMoreButton from "./LoadMoreButton";
import { type Meta } from "@storybook/react";

const meta: Meta<typeof LoadMoreButton> = {
  title: "Pages/InitialPage/HistoryList/LoadMoreButton",
  component: LoadMoreButton,
  decorators: [
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = () => <LoadMoreButton loading={false} onclick={() => true} />;
