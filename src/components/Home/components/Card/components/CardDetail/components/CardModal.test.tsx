import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { type CardData } from "@/types";
import CardModal from "./CardModal";

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
  },
  debit: {
    id: 2,
    card_number: "1234123412341234",
    cardholder_name: "Victor J L Teste",
    expiration_date: "12/31",
    cvv: "123",
    user_id: 75,
    created_at: "2024/01/08 21:58:35"
  }
} ];

const router = createMemoryRouter(
  [ { path: "/card", element: <CardModal cardData={cardData} /> } ],
  { initialEntries: [ "/card" ], }
);

const CardModalTestId: string = "CardModal";
const CardModalListItemTestId: string = "CardModalListItem";

sessionStorage.setItem("cardData", JSON.stringify(cardData));

describe("CardModal component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(CardModalTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(CardModalTestId)).toHaveClass(
      "pr-1 flex flex-col gap-4 md:gap-6 lg:gap-4 w-full max-h-[50dvh] overflow-y-scroll lg:w-3/5 xl:w-2/4 animate-fade-down animate-duration-1000 animate-ease-in-out"
    );
  });

  test("Should be able to render the ListItem correctly", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItem with the correctly tailwind classes", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveClass(
      "relative text-center flex flex-col gap-2 md:gap-4 justify-center items-center bg-saturatedBlue rounded-2xl p-4 md:text-xl lg:text-2xl cursor-pointer hover:bg-darkBlue border-2 border-darkBlue transition-all delay-75 ease-in-out"
    );
  });

  test("Should be able to render the CreditListItem with the correctly subtitle", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      "Credit"
    );
  });

  test("Should be able to render the CreditListItem with the correctly balance", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      `Credit: ${cardData[ 0 ].credit?.balance}`
    );
  });

  test("Should be able to render the CreditListItem with the correctly CVV", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      `CVV: ${cardData[ 0 ].credit?.cvv}`
    );
  });

  test("Should be able to render the CreditListItem with the correctly expiration date", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      `Expiration Date: ${cardData[ 0 ].credit?.expiration_date}`
    );
  });

  test("Should be able to render the CreditListItem with the correctly card holder name", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      `Card Holder Name: ${cardData[ 0 ].credit?.cardholder_name}`
    );
  });

  test("Should be able to render the CreditListItem with the correctly card number", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      `Card Number: ${cardData[ 0 ].credit?.card_number}`
    );
  });

  test("Should be able to render the DebitListItem with the correctly subtitle", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      "Debit"
    );
  });

  test("Should be able to render the DebitListItem with the correctly CVV", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      `CVV: ${cardData[ 0 ].debit?.cvv}`
    );
  });

  test("Should be able to render the DebitListItem with the correctly expiration date", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      `Expiration Date: ${cardData[ 0 ].debit?.expiration_date}`
    );
  });

  test("Should be able to render the DebitListItem with the correctly card holder name", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      `Card Holder Name: ${cardData[ 0 ].debit?.cardholder_name}`
    );
  });

  test("Should be able to render the DebitListItem with the correctly card number", () => {
    expect(screen.getByTestId(CardModalListItemTestId)).toHaveTextContent(
      `Card Number: ${cardData[ 0 ].debit?.card_number}`
    );
  });
});
