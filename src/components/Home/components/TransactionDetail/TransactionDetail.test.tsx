import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import { type SummaryData } from "../functions";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import TransactionDetail from "./TransactionDetail";

const TransactionDetailTitleTestId: string = "TransactionDetailTitle";
const TransactionModalTestId: string = "TransactionModal";
const TransactionDetailDivision: string = "TransactionDetailDivision";

const transactionData: SummaryData = {
  id: 1,
  description: "deposit",
  value: 1000,
  date: "2024/01/08 21:57:59",
  user_id: 71,
  type: "input"
};

const formattedBalance: string = "$1,000.00";

const router = createMemoryRouter(
  [
    {
      path: "/transaction/hash",
      element: <TransactionDetail fakeData={transactionData} />
    }
  ],
  { initialEntries: [ "/transaction/hash" ], }
);

describe("TransactionDetail component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the division correctly", () => {
    expect(screen.getByTestId(TransactionDetailDivision)).toBeInTheDocument();
  });

  test("Should be able to render the division with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TransactionDetailDivision)).toHaveClass(
      "flex flex-col items-center justify-center animate-fade duration-500"
    );
  });

  test("Should be able to render the Title correctly", () => {
    expect(screen.getByTestId(TransactionDetailTitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Title with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TransactionDetailTitleTestId)).toHaveClass(
      "text-xl md:text-2xl lg:text-3xl font-bold mb-14"
    );
  });

  test("Should be able to render the Title with the correctly text", () => {
    expect(screen.getByTestId(TransactionDetailTitleTestId)).toHaveTextContent(
      "TRANSACTION DETAILS"
    );
  });

  test("Should be able to render the Modal correctly", () => {
    expect(screen.getByTestId(TransactionModalTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal with the correctly transactionData", () => {
    expect(screen.getByTestId(TransactionModalTestId)).toHaveTextContent(
      transactionData.description
    );

    expect(screen.getByTestId(TransactionModalTestId)).toHaveTextContent(
      transactionData.date
    );

    expect(screen.getByTestId(TransactionModalTestId)).toHaveTextContent(
      formattedBalance
    );
  });
});
