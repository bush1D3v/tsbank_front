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
import { type depositResponseProps, depositSubmit } from "./functions";
import { type TransactionData } from "../../../types";
import Deposit from "./Deposit";

const emailData: string = "victor.teste@gmail.com";
const valueData: number = 2000;
const passwordData: string = "testAccount123";

const ModalTestId: string = "Modal";
const DepositTestId: string = "Deposit";
const DepositSubtitleTestId: string = "DepositSubtitle";
const DepositEmailTestId: string = "DepositEmail";
const DepositValueTestId: string = "DepositValue";
const DepositPasswordTestId: string = "DepositPassword";
const DepositButtonTestId: string = "DepositButton";

const depositResult: TransactionData = {
  "id": 41,
  "description": "deposit",
  "value": 2000,
  "date": "2023/02/20 11:54:10",
  "user_id": 49,
  "type": "input"
};

const result: depositResponseProps = {
  success: true,
  message: "Deposit successfully submitted!",
  transactionData: depositResult
};

vi.mock("./functions", async () => ({
  depositSubmit: vi.fn(async () => {
    return result;
  }),
}));

const router = createMemoryRouter(
  [ { path: "/deposit", element: <Deposit /> } ],
  { initialEntries: [ "/deposit" ], }
);

describe("Deposit component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(DepositTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(DepositSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(DepositSubtitleTestId)).toHaveTextContent(
      "Insert Deposit"
    );
  });

  test("Should be able to render the Subtitle with correctly tailwind classes", () => {
    expect(screen.getByTestId(DepositSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the EmailInput correctly", () => {
    expect(screen.getByTestId(DepositEmailTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ValueInput correctly", () => {
    expect(screen.getByTestId(DepositValueTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(DepositPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(DepositButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(DepositEmailTestId), {
      target: { value: emailData },
    });

    expect(screen.getByTestId(DepositEmailTestId)).toHaveValue(emailData);

    fireEvent.change(screen.getByTestId(DepositPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(DepositPasswordTestId)).toHaveValue(passwordData);

    fireEvent.change(screen.getByTestId(DepositValueTestId), {
      target: { value: valueData },
    });

    expect(screen.getByTestId(DepositValueTestId)).toHaveValue(valueData.toString());

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(DepositButtonTestId));
    });

    expect(depositSubmit).toHaveBeenCalled();
    expect(depositSubmit).toHaveBeenCalledWith({
      transactionData: {
        email: emailData,
        value: valueData.toString(),
        password: passwordData,
      }
    });
  });
});
