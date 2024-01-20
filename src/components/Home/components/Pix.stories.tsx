import { withRouter } from "storybook-addon-react-router-v6";
import Pix from "./Pix";
import { type Meta } from "@storybook/react";
import Footer from "../../Footer";
import Header from "../../Header";

const meta: Meta<typeof Pix> = {
  title: "Pages/InitialPage/Pix",
  component: Pix,
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
      <Pix />
    </div>
    <Footer />
  </div>;
