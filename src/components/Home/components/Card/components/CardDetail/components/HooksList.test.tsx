import "@testing-library/jest-dom";
import {
  screen,
  render,
  fireEvent
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { type CardData } from "@/types";
import HooksList from "./HooksList";
import {
  ROUTER_BASE_URL,
  CARD_CREATE,
  CARD_UPDATE,
  CARD_TRANSACTION,
  CREDIT_PAYMENT
} from "@/utils/routerPaths";

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

const HooksListTestId: string = "HooksList";
const HooksListItemCreateTestId: string = "HooksListItemCreate";
const HooksListItemUpdateTestId: string = "HooksListItemUpdate";
const HooksListItemTransactionTestId: string = "HooksListItemTransaction";
const HooksListItemPaymentTestId: string = "HooksListItemPayment";

const router = createMemoryRouter(
  [ { path: "/", element: <HooksList cardData={cardData} /> } ],
  { initialEntries: [ "/" ], }
);

describe("HooksList component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(HooksListTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListTestId)).toHaveClass(
      "flex flex-col lg:flex-row w-10/12 lg:w-full gap-5 md:gap-6 lg:gap-8 animate-fade-down animate-duration-700 animate-ease-in-out"
    );
  });

  test("Should be able to render the ListItemCreate correctly", () => {
    expect(screen.getByTestId(HooksListItemCreateTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemCreate with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListItemCreateTestId)).toHaveClass(
      "flex w-full"
    );
  });

  test("Should be able to render the ListItemCreate with the correctly text", () => {
    expect(screen.getByTestId(HooksListItemCreateTestId)).toHaveTextContent(
      "CREATE CARD"
    );
  });

  test("Should be able to fire event the ListItemCreate", () => {
    fireEvent.click(screen.getByTestId(HooksListItemCreateTestId));
    expect(screen.getByTestId(HooksListItemCreateTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${CARD_CREATE}`
    );
  });

  test("Should be able to render the ListItemUpdate correctly", () => {
    expect(screen.getByTestId(HooksListItemUpdateTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemUpdate with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListItemUpdateTestId)).toHaveClass(
      "flex w-full"
    );
  });

  test("Should be able to render the ListItemUpdate with the correctly text", () => {
    expect(screen.getByTestId(HooksListItemUpdateTestId)).toHaveTextContent(
      "UPDATE PASSWORD"
    );
  });

  test("Should be able to fire event the ListItemUpdate", () => {
    fireEvent.click(screen.getByTestId(HooksListItemUpdateTestId));
    expect(screen.getByTestId(HooksListItemUpdateTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${CARD_UPDATE}`
    );
  });

  test("Should be able to render the ListItemTransaction correctly", () => {
    expect(screen.getByTestId(HooksListItemTransactionTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemTransaction with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListItemTransactionTestId)).toHaveClass(
      "flex w-full"
    );
  });

  test("Should be able to render the ListItemTransaction with the correctly text", () => {
    expect(screen.getByTestId(HooksListItemTransactionTestId)).toHaveTextContent(
      "CARD TRANSACTION"
    );
  });

  test("Should be able to fire event the ListItemTransaction", () => {
    fireEvent.click(screen.getByTestId(HooksListItemTransactionTestId));
    expect(screen.getByTestId(HooksListItemTransactionTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${CARD_TRANSACTION}`
    );
  });

  test("Should be able to render the ListItemPayment correctly", () => {
    expect(screen.getByTestId(HooksListItemPaymentTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemPayment with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListItemPaymentTestId)).toHaveClass(
      "flex w-full"
    );
  });

  test("Should be able to render the ListItemPayment with the correctly text", () => {
    expect(screen.getByTestId(HooksListItemPaymentTestId)).toHaveTextContent(
      "CREDIT PAYMENT"
    );
  });

  test("Should be able to fire event the ListItemPayment", () => {
    fireEvent.click(screen.getByTestId(HooksListItemPaymentTestId));
    expect(screen.getByTestId(HooksListItemPaymentTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${CREDIT_PAYMENT}`
    );
  });
});
