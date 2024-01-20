import { withRouter } from "storybook-addon-react-router-v6";
import TransactionDetail from ".";
import { Meta } from "@storybook/react";
import { SummaryData } from "../functions";
import Footer from "../../../Footer";
import Header from "../../../Header";

const meta: Meta<typeof TransactionDetail> = {
  title: "Pages/InitialPage/TransactionDetail",
  component: TransactionDetail,
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

const fakeData: SummaryData = {
  id: 1,
  description: "deposit",
  value: 1000,
  date: "2024/01/08 21:57:59",
  user_id: 71,
  type: "input"
};

export const Default = () =>
  <div className="h-[100dvh] flex items-center justify-center">
    <TransactionDetail fakeData={fakeData} />
  </div>;

export const WithHeaderAndFooter = () =>
  <div className="h-[100dvh] w-[100dvw] flex justify-between flex-col">
    <Header />
    <div className="flex justify-center">
      <TransactionDetail fakeData={fakeData} />
    </div>
    <Footer />
  </div>;
