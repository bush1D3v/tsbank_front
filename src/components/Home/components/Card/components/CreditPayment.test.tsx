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
import { type creditPaymentResponseProps, creditPaymentSubmit } from "./functions";
import { type TransactionData } from "../../../../../types";
import CreditPayment from "./CreditPayment";

const valueData: number = 2000;
const passwordData: string = "123456";

const creditPaymentResult: TransactionData = {
  "id": 41,
  "description": "card pay",
  "value": 2000,
  "date": "2023/02/20 11:54:10",
  "user_id": 49,
  "type": "output"
};

const result: creditPaymentResponseProps = {
  success: true,
  message: "Credit payment was successful.",
  transactionData: creditPaymentResult
};

vi.mock("./functions", async () => ({
  creditPaymentSubmit: vi.fn(async () => {
    return result;
  }),
}));

const router = createMemoryRouter(
  [ { path: "/card/pay", element: <CreditPayment /> } ],
  { initialEntries: [ "/card/pay" ], }
);

const ModalTestId: string = "Modal";
const CreditPaymentTestId: string = "CreditPayment";
const CreditPaymentSubtitleTestId: string = "CreditPaymentSubtitle";
const CreditPaymentValueTestId: string = "CreditPaymentValue";
const CreditPaymentPasswordTestId: string = "CreditPaymentPassword";
const CreditPaymentButtonTestId: string = "CreditPaymentButton";

describe("CreditPayment component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(CreditPaymentTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(CreditPaymentSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(CreditPaymentSubtitleTestId)).toHaveTextContent(
      "Credit Payment"
    );
  });

  test("Should be able to render the Subtitle with correctly tailwind classes", () => {
    expect(screen.getByTestId(CreditPaymentSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the ValueInput correctly", () => {
    expect(screen.getByTestId(CreditPaymentValueTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(CreditPaymentPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(CreditPaymentButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(CreditPaymentPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(CreditPaymentPasswordTestId)).toHaveValue(passwordData.toString());

    fireEvent.change(screen.getByTestId(CreditPaymentValueTestId), {
      target: { value: valueData },
    });

    expect(screen.getByTestId(CreditPaymentValueTestId)).toHaveValue(valueData.toString());

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(CreditPaymentButtonTestId));
    });

    expect(creditPaymentSubmit).toHaveBeenCalled();
    expect(creditPaymentSubmit).toHaveBeenCalledWith({
      cardData: {
        value: valueData.toString(),
        password: passwordData,
      }
    });
  });
});
