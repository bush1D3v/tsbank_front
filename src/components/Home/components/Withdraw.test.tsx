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
import { type withdrawResponseProps, withdrawSubmit } from "./functions";
import { type TransactionData } from "../../../types";
import Withdraw from "./Withdraw";

const valueData: number = 2000;
const passwordData: string = "testAccount123";

const ModalTestId: string = "Modal";
const WithdrawTestId: string = "Withdraw";
const WithdrawSubtitleTestId: string = "WithdrawSubtitle";
const WithdrawValueTestId: string = "WithdrawValue";
const WithdrawPasswordTestId: string = "WithdrawPassword";
const WithdrawButtonTestId: string = "WithdrawButton";

const withdrawResult: TransactionData = {
  "id": 41,
  "description": "withdraw",
  "value": 2000,
  "date": "2023/02/20 11:54:10",
  "user_id": 49,
  "type": "output"
};

const result: withdrawResponseProps = {
  success: true,
  message: "Withdraw successfully submitted!",
  transactionData: withdrawResult
};

vi.mock("./functions", async () => ({
  withdrawSubmit: vi.fn(async () => {
    return result;
  }),
}));

const router = createMemoryRouter(
  [ { path: "/withdraw", element: <Withdraw /> } ],
  { initialEntries: [ "/withdraw" ], }
);

describe("Withdraw component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(WithdrawTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(WithdrawSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(WithdrawSubtitleTestId)).toHaveTextContent(
      "Make Withdraw"
    );
  });

  test("Should be able to render the Subtitle with correctly tailwind classes", () => {
    expect(screen.getByTestId(WithdrawSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the ValueInput correctly", () => {
    expect(screen.getByTestId(WithdrawValueTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(WithdrawPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(WithdrawButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(WithdrawPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(WithdrawPasswordTestId)).toHaveValue(passwordData);

    fireEvent.change(screen.getByTestId(WithdrawValueTestId), {
      target: { value: valueData },
    });

    expect(screen.getByTestId(WithdrawValueTestId)).toHaveValue(valueData.toString());

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(WithdrawButtonTestId));
    });

    expect(withdrawSubmit).toHaveBeenCalled();
    expect(withdrawSubmit).toHaveBeenCalledWith({
      transactionData: {
        value: valueData.toString(),
        password: passwordData,
      }
    });
  });
});
