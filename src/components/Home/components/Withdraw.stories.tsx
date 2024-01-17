import { withRouter } from "storybook-addon-react-router-v6";
import Withdraw from "./Withdraw";
import { Meta } from "@storybook/react";
import Footer from "../../Footer";
import Header from "../../Header";

const meta: Meta<typeof Withdraw> = {
  title: "Pages/InitialPage/Withdraw",
  component: Withdraw,
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
      <Withdraw />
    </div>
    <Footer />
  </div>;
