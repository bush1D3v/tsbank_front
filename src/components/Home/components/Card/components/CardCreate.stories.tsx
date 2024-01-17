import { withRouter } from "storybook-addon-react-router-v6";
import CardCreate from "./CardCreate";
import { Meta } from "@storybook/react";
import Footer from "../../../../Footer";
import Header from "../../../../Header";

const meta: Meta<typeof CardCreate> = {
  title: "Pages/InitialPage/CardPage/CardCreate",
  component: CardCreate,
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
      <CardCreate />
    </div>
    <Footer />
  </div>;
