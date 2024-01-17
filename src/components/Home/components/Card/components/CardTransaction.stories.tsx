import { withRouter } from "storybook-addon-react-router-v6";
import CardTransaction from "./CardTransaction";
import { Meta } from "@storybook/react";
import Footer from "../../../../Footer";
import Header from "../../../../Header";

const meta: Meta<typeof CardTransaction> = {
  title: "Pages/InitialPage/CardPage/CardTransaction",
  component: CardTransaction,
  decorators: [
    withRouter,
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

export default meta;

export const Default = {};

export const WithHeaderAndFooter = () =>
  <div className="h-[100dvh] w-[100dvw] flex justify-between flex-col">
    <Header />
    <div className="flex justify-center">
      <CardTransaction />
    </div>
    <Footer />
  </div>;
