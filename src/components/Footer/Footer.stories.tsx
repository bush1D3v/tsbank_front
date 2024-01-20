import { type Meta } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div className="h-[100dvh] py-[50dvh]">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};
