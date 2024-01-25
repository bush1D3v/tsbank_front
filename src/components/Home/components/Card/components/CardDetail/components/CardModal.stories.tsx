import { CardData } from "../../../../../../../types";
import { withRouter } from "storybook-addon-react-router-v6";
import { type Meta } from "@storybook/react";
import CardModal from "./CardModal";

const meta: Meta<typeof CardModal> = {
  title: "Pages/InitialPage/CardPage/CardDetail/CardModal",
  component: CardModal,
  decorators: [
    withRouter,
    (Story) => (
      <div className="h-[100dvh] flex items-center justify-center">
        <Story />
      </div>
    )
  ]
};

const cardData: CardData[] = [ {
  credit: {
    id: 1,
    card_number: "1234123412341234",
    cardholder_name: "Victor J L Teste",
    expiration_date: "12/31",
    cvv: "123",
    user_id: 75,
    created_at: "2024/01/08 21:58:35",
    balance: 2000
  }
} ];

sessionStorage.setItem("cardData", JSON.stringify(cardData));

export default meta;

export const Default = () =>
  <CardModal cardData={cardData} />;
