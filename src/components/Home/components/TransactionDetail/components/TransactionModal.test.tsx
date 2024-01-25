import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
} from "vitest";
import { type SummaryData } from "../../functions";
import TransactionModal from "./TransactionModal";

const transactionData: SummaryData = {
  id: 1,
  description: "deposit",
  value: 1000,
  date: "2024/01/08 21:57:59",
  user_id: 71,
  type: "input"
};

const formattedBalance: string = "$1,000.00";

vi.mock("../../functions", () => ({
  balanceFormat: vi.fn(() => {
    return formattedBalance;
  })
}));

const TransactionModalTestId: string = "TransactionModal";

describe("TransactionModal component tests", () => {
  beforeEach(() => {
    render(<TransactionModal transactionData={transactionData} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(TransactionModalTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TransactionModalTestId)).toHaveClass(
      "text-center flex flex-col gap-2 md:gap-4 bg-saturatedBlue rounded-2xl p-4 md:text-xl lg:text-2xl cursor-pointer hover:bg-darkBlue border-2 border-darkBlue transition-all scale-125 hover:scale-150 delay-75 ease-in-out capitalize font-bold"
    );
  });

  test("Should be able to render the component with the correctly description", () => {
    expect(screen.getByTestId(TransactionModalTestId)).toHaveTextContent(
      transactionData.description
    );
  });

  test("Should be able to render the component with the correctly value", () => {
    expect(screen.getByTestId(TransactionModalTestId)).toHaveTextContent(
      `${formattedBalance}`
    );
  });

  test("Should be able to render the component with the correctly date", () => {
    expect(screen.getByTestId(TransactionModalTestId)).toHaveTextContent(
      transactionData.date
    );
  });
});
