import { Meta } from "@storybook/react";
import Article from "./Article";
import { lpInterface } from "../../../../../../assets/images";

const meta: Meta<typeof Article> = {
  title: "Pages/AboutProjectPage/ArticleList/Article",
  component: Article,
  decorators: [
    (Story) => (
      <div className="flex h-[100dvh] items-center justify-center">
        <Story />
      </div>
    )
  ],
  argTypes: {
    rowDirection: {
      control: {
        type: "select"
      }
    }
  }
};

export default meta;

export const Default = {
  args: {
    text: `TSBank offers a seamless platform, allowing you to effortlessly navigate through your accounts,
    make <em> secure transactions</em>, and gain valuable insights into your financial well-being.`,
    image: lpInterface,
    imageAlt: "TSBank Interface",
    rowDirection: "lg:flex-row-reverse"
  }
};
