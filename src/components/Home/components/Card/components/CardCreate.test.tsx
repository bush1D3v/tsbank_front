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
import { type cardCreateResponseProps, cardCreateSubmit } from "./functions";
import CardCreate from "./CardCreate";

const nameData: string = "Victor J L Navarro";
const numberData: string = "1234123412341234";
const cvvData: string = "123";
const expirationData: string = "12/31";
const passwordData: string = "123456";
const typeData: string = "credit";

const result: cardCreateResponseProps = {
  success: true,
  message: `${typeData} card added successfully. Your credit limit is 20000`,
};

vi.mock("./functions", async () => ({
  cardCreateSubmit: vi.fn(async () => {
    return result;
  }),
}));

const router = createMemoryRouter(
  [ { path: "/card/create", element: <CardCreate /> } ],
  { initialEntries: [ "/card/create" ], }
);

const CardCreateTestId: string = "CardCreate";
const CardCreateSubtitleTestId: string = "CardCreateSubtitle";
const CardCreateNameTestId: string = "CardCreateName";
const CardCreateNumberTestId: string = "CardCreateNumber";
const CardCreateCvvTestId: string = "CardCreateCvv";
const CardCreateExpirationTestId: string = "CardCreateExpiration";
const CardCreateTypeTestId: string = "CardCreateType";
const CardCreatePasswordTestId: string = "CardCreatePassword";
const CardCreateButtonTestId: string = "CardCreateButton";

describe("CardCreate component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(CardCreateTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(CardCreateSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(CardCreateSubtitleTestId)).toHaveTextContent(
      "Create Your Card"
    );
  });

  test("Should be able to render the Subtitle with correctly tailwind classes", () => {
    expect(screen.getByTestId(CardCreateSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the NameInput correctly", () => {
    expect(screen.getByTestId(CardCreateNameTestId)).toBeInTheDocument();
  });

  test("Should be able to render the NumberInput correctly", () => {
    expect(screen.getByTestId(CardCreateNumberTestId)).toBeInTheDocument();
  });

  test("Should be able to render the CvvInput correctly", () => {
    expect(screen.getByTestId(CardCreateCvvTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ExpirationInput correctly", () => {
    expect(screen.getByTestId(CardCreateExpirationTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(CardCreatePasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the TypeInput correctly", () => {
    expect(screen.getByTestId(CardCreateTypeTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(CardCreateButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(CardCreateNameTestId), {
      target: { value: nameData },
    });

    expect(screen.getByTestId(CardCreateNameTestId)).toHaveValue(nameData);

    fireEvent.change(screen.getByTestId(CardCreateNumberTestId), {
      target: { value: numberData },
    });

    expect(screen.getByTestId(CardCreateNumberTestId)).toHaveValue(numberData);

    fireEvent.change(screen.getByTestId(CardCreateCvvTestId), {
      target: { value: cvvData },
    });

    expect(screen.getByTestId(CardCreateCvvTestId)).toHaveValue(cvvData);

    fireEvent.change(screen.getByTestId(CardCreateExpirationTestId), {
      target: { value: expirationData },
    });

    expect(screen.getByTestId(CardCreateExpirationTestId)).toHaveValue(expirationData);

    fireEvent.change(screen.getByTestId(CardCreatePasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(CardCreatePasswordTestId)).toHaveValue(passwordData);

    fireEvent.change(screen.getByTestId(CardCreateTypeTestId), {
      target: { value: typeData },
    });

    expect(screen.getByTestId(CardCreateTypeTestId)).toHaveValue(typeData);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(CardCreateButtonTestId));
    });

    expect(cardCreateSubmit).toHaveBeenCalled();
    expect(cardCreateSubmit).toHaveBeenCalledWith({
      cardData: {
        card_number: numberData,
        cardholder_name: nameData,
        cvv: cvvData,
        expiration_date: expirationData,
        card_type: typeData,
        password: passwordData,
      }
    });
  });
});
