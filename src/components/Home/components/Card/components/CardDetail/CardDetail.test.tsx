import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { type CardDetailResponseProps } from "../functions";
import { type CardData } from "@/types";
import CardDetail from "./CardDetail";

const numberData: string = "1234123412341234";
const nameData: string = "Victor J L Teste";
const expirationData: string = "12/31";
const cvvData: string = "123";
const balanceData: number = 2000;

const cardData: CardData[] = [ {
  credit: {
    id: 1,
    card_number: numberData,
    cardholder_name: nameData,
    expiration_date: expirationData,
    cvv: cvvData,
    user_id: 75,
    created_at: "2024/01/08 21:58:35",
    balance: balanceData
  }
} ];

const detailResponse: CardDetailResponseProps = {
  success: true,
  message: cardData
};

vi.mock("../functions", () => ({
  cardDetailSubmit: vi.fn(() => {
    return detailResponse;
  })
}));

const router = createMemoryRouter(
  [ { path: "/card", element: <CardDetail /> } ],
  { initialEntries: [ "/card" ], }
);

const HooksListTesId: string = "HooksList";
const CardDetailTestId: string = "CardDetail";
const CardDetailModalTestId: string = "CardModal";

sessionStorage.setItem("cardData", JSON.stringify(cardData));

describe("CardDetail component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(CardDetailTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(CardDetailTestId)).toHaveClass(
      "flex flex-col text-center items-center max-h-[82dvh] gap-4 md:gap-8 lg:gap-12 xl:gap-16 justify-center lg:w-11/12 xl:w-9/12 py-2"
    );
  });

  test("Should be able to render the CardModal correctly", () => {
    expect(screen.getByTestId(CardDetailModalTestId)).toBeInTheDocument();
  });

  test("Should be able to render the CardModal with the correctly cardData parameter", () => {
    expect(screen.getByTestId(CardDetailModalTestId)).toHaveTextContent(
      nameData
    );
    expect(screen.getByTestId(CardDetailModalTestId)).toHaveTextContent(
      numberData
    );
    expect(screen.getByTestId(CardDetailModalTestId)).toHaveTextContent(
      expirationData
    );
    expect(screen.getByTestId(CardDetailModalTestId)).toHaveTextContent(
      cvvData
    );
    expect(screen.getByTestId(CardDetailModalTestId)).toHaveTextContent(
      balanceData.toString()
    );
  });

  test("Should be able to render the HooksList correctly", () => {
    expect(screen.getByTestId(HooksListTesId)).toBeInTheDocument();
  });
});
