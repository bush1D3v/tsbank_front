import "@testing-library/jest-dom";
import {
  fireEvent,
  screen,
  render,
  waitFor,
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { type cardTransactionResponseProps, cardTransactionSubmit } from "./functions";
import { type TransactionData } from "../../../../../types";
import CardTransaction from "./CardTransaction";

const typeData: string = "credit";
const passwordData: string = "123456";
const valueData: number = 2000;

const cardTransactionResult: TransactionData = {
  "id": 41,
  "description": typeData,
  "value": 2000,
  "date": "2023/02/20 11:54:10",
  "user_id": 49,
  "type": "output"
};

const result: cardTransactionResponseProps = {
  success: true,
  message: "Card transaction was successful.",
  transactionData: cardTransactionResult
};

vi.mock("./functions", async () => ({
  cardTransactionSubmit: vi.fn(async () => {
    return result;
  }),
}));

const router = createMemoryRouter(
  [ { path: "/card/transaction", element: <CardTransaction /> } ],
  { initialEntries: [ "/card/transaction" ], }
);

const ModalTestId: string = "Modal";
const CardTransactionTestId: string = "CardTransaction";
const CardTransactionSubtitleTestId: string = "CardTransactionSubtitle";
const CardTransactionTypeTestId: string = "CardTransactionType";
const CardTransactionPasswordTestId: string = "CardTransactionPassword";
const CardTransactionValueTestId: string = "CardTransactionValue";
const CardTransactionButtonTestId: string = "CardTransactionButton";

describe("CardTransaction component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(CardTransactionTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(CardTransactionSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(CardTransactionSubtitleTestId)).toHaveTextContent(
      "Card Transaction"
    );
  });

  test("Should be able to render the Subtitle with correctly tailwind classes", () => {
    expect(screen.getByTestId(CardTransactionSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the TypeInput correctly", () => {
    expect(screen.getByTestId(CardTransactionTypeTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ValueInput correctly", () => {
    expect(screen.getByTestId(CardTransactionValueTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(CardTransactionPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(CardTransactionButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(CardTransactionTypeTestId), {
      target: { value: typeData },
    });

    expect(screen.getByTestId(CardTransactionTypeTestId)).toHaveValue(typeData);

    fireEvent.change(screen.getByTestId(CardTransactionPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(CardTransactionPasswordTestId)).toHaveValue(passwordData.toString());

    fireEvent.change(screen.getByTestId(CardTransactionValueTestId), {
      target: { value: valueData },
    });

    expect(screen.getByTestId(CardTransactionValueTestId)).toHaveValue(valueData.toString());

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(CardTransactionButtonTestId));
    });

    expect(cardTransactionSubmit).toHaveBeenCalled();
    expect(cardTransactionSubmit).toHaveBeenCalledWith({
      cardData: {
        card_type: typeData,
        value: valueData.toString(),
        password: passwordData,
      }
    });
  });
});
