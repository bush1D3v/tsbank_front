import { withRouter } from "storybook-addon-react-router-v6";
import CardDetail from "./CardDetail";
import { Meta } from "@storybook/react";
import Header from "../../../../../Header";
import Footer from "../../../../../Footer";

const meta: Meta<typeof CardDetail> = {
  title: "Pages/InitialPage/CardPage",
  component: CardDetail,
  decorators: [ withRouter ]
};

export default meta;

export const Default = () =>
  <div className="h-[100dvh] flex items-center justify-center">
    <CardDetail />
  </div>;

export const WithHeaderAndFooter = () =>
  <div className="h-[100dvh] flex flex-col justify-between">
    <Header />
    <div className="flex justify-center">
      <CardDetail />
    </div>
    <Footer />
  </div>;

sessionStorage.setItem("cardsData", JSON.stringify([
  {
    credit: {
      balance: 1000,
      card_number: "1234567890123456",
      cardholder_name: "John Doe",
      cvv: "123",
      created_at: "2024/01/08 21:58:18",
      expiration_date: "12/31",
      id: 1,
      user_id: 71
    }
  },
  {
    debit: {
      card_number: "1234567890123456",
      cardholder_name: "John Doe",
      cvv: "123",
      created_at: "2024/01/08 21:58:18",
      expiration_date: "12/31",
      id: 1,
      user_id: 71
    }
  }
]));
