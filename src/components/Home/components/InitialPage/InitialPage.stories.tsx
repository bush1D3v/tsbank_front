import { withRouter } from "storybook-addon-react-router-v6";
import InitialPage from "./InitialPage";
import { Meta } from "@storybook/react";
import Footer from "../../../Footer";
import Header from "../../../Header";

const meta: Meta<typeof InitialPage> = {
  title: "Pages/InitialPage",
  component: InitialPage,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <div className="h-[100dvh] flex items-center justify-center">
    <InitialPage />
  </div>;

export const WithHeaderAndFooter = () =>
  <div className="h-[100dvh] flex flex-col justify-between">
    <Header />
    <div className="flex justify-center">
      <InitialPage />
    </div>
    <Footer />
  </div>;

const historyData = [
  {
    id: 49,
    description: "deposit",
    value: 100,
    date: "2024/01/08 21:57:59",
    user_id: 71,
    type: "input"
  },
  {
    id: 50,
    description: "deposit",
    value: 100,
    date: "2024/01/08 21:58:59",
    user_id: 71,
    type: "input"
  },
  {
    id: 51,
    description: "deposit",
    value: 100,
    date: "2024/01/08 21:59:59",
    user_id: 71,
    type: "input"
  }
];
sessionStorage.setItem("historyData", JSON.stringify(historyData));

const userData = {
  user: {
    id: 71,
    name: "John Doe",
    password: "123456",
    balance: 1000000
  }
};
sessionStorage.setItem("userData", JSON.stringify(userData));
