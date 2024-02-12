import { withRouter } from "storybook-addon-react-router-v6";
import CardUpdate from "./CardUpdate";
import { type Meta } from "@storybook/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const meta: Meta<typeof CardUpdate> = {
  title: "Pages/InitialPage/CardPage/CardUpdate",
  component: CardUpdate,
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
      <CardUpdate />
    </div>
    <Footer />
  </div>;
