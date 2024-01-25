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
import { type pixResponseProps, pixSubmit } from "./functions";
import { type TransactionData } from "../../../types";
import Pix from "./Pix";

const cpfData: string = "12121212121";
const valueData: number = 2000;
const passwordData: string = "testAccount123";

const ModalTestId: string = "Modal";
const PixTestId: string = "Pix";
const PixSubtitleTestId: string = "PixSubtitle";
const PixCpfTestId: string = "PixCpf";
const PixValueTestId: string = "PixValue";
const PixPasswordTestId: string = "PixPassword";
const PixButtonTestId: string = "PixButton";

const pixResult: TransactionData = {
  "id": 41,
  "description": "pix",
  "value": 2000,
  "date": "2023/02/20 11:54:10",
  "user_id": 49,
  "type": "output"
};

const result: pixResponseProps = {
  success: true,
  message: "Pix successfully submitted!",
  transactionData: pixResult
};

vi.mock("./functions", async () => ({
  pixSubmit: vi.fn(async () => {
    return result;
  }),
}));

const router = createMemoryRouter(
  [ { path: "/pix", element: <Pix /> } ],
  { initialEntries: [ "/pix" ], }
);

describe("Pix component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(PixTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(PixSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(PixSubtitleTestId)).toHaveTextContent(
      "Send Pix"
    );
  });

  test("Should be able to render the Subtitle with correctly tailwind classes", () => {
    expect(screen.getByTestId(PixSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the CpfInput correctly", () => {
    expect(screen.getByTestId(PixCpfTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ValueInput correctly", () => {
    expect(screen.getByTestId(PixValueTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(PixPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(PixButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(PixCpfTestId), {
      target: { value: cpfData },
    });

    expect(screen.getByTestId(PixCpfTestId)).toHaveValue(cpfData);

    fireEvent.change(screen.getByTestId(PixPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(PixPasswordTestId)).toHaveValue(passwordData);

    fireEvent.change(screen.getByTestId(PixValueTestId), {
      target: { value: valueData },
    });

    expect(screen.getByTestId(PixValueTestId)).toHaveValue(valueData.toString());

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(PixButtonTestId));
    });

    expect(pixSubmit).toHaveBeenCalled();
    expect(pixSubmit).toHaveBeenCalledWith({
      transactionData: {
        cpf: cpfData,
        value: valueData.toString(),
        password: passwordData,
      }
    });
  });
});
