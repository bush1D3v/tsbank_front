import { Meta } from "@storybook/react";
import Paragraph from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "Pages/AboutProject/ArticleList/Article/Paragraph",
  component: Paragraph,
  decorators: [
    (Story) => (
      <div className="flex h-[100dvh] items-center justify-center">
        <Story />
      </div>
    )
  ],
};

export default meta;

export const Default = {
  args: {
    text: `TSBank offers a seamless platform, allowing you to effortlessly navigate through your accounts,
    make <em> secure transactions</em>, and gain <strong>valuable insights</strong> into your financial well-being.`
  }
};
