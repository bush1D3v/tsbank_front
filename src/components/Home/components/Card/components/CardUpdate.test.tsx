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
import { type cardUpdateResponseProps, cardUpdateSubmit } from "./functions";
import CardUpdate from "./CardUpdate";

const passwordData: string = "123456";
const newPasswordData: string = "654321";
const typeData: string = "credit";

const result: cardUpdateResponseProps = {
  success: true,
  message: `password of your ${typeData} card has been updated successfully`,
};

vi.mock("./functions", async () => ({
  cardUpdateSubmit: vi.fn(async () => {
    return result;
  }),
}));

const router = createMemoryRouter(
  [ { path: "/card/update", element: <CardUpdate /> } ],
  { initialEntries: [ "/card/update" ], }
);

const ModalTestId: string = "Modal";
const CardUpdateTestId: string = "CardUpdate";
const CardUpdateSubtitleTestId: string = "CardUpdateSubtitle";
const CardUpdateTypeTestId: string = "CardUpdateType";
const CardUpdatePasswordTestId: string = "CardUpdatePassword";
const CardUpdateNewPasswordTestId: string = "CardUpdateNewPassword";
const CardUpdateButtonTestId: string = "CardUpdateButton";

describe("CardUpdate component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(CardUpdateTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(CardUpdateSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(CardUpdateSubtitleTestId)).toHaveTextContent(
      "Update Card Password"
    );
  });

  test("Should be able to render the Subtitle with correctly tailwind classes", () => {
    expect(screen.getByTestId(CardUpdateSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the TypeInput correctly", () => {
    expect(screen.getByTestId(CardUpdateTypeTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(CardUpdatePasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the NewPasswordInput correctly", () => {
    expect(screen.getByTestId(CardUpdateNewPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(CardUpdateButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(CardUpdateTypeTestId), {
      target: { value: typeData },
    });

    expect(screen.getByTestId(CardUpdateTypeTestId)).toHaveValue(typeData);

    fireEvent.change(screen.getByTestId(CardUpdatePasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(CardUpdatePasswordTestId)).toHaveValue(passwordData);

    fireEvent.change(screen.getByTestId(CardUpdateNewPasswordTestId), {
      target: { value: newPasswordData },
    });

    expect(screen.getByTestId(CardUpdateNewPasswordTestId)).toHaveValue(newPasswordData);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(CardUpdateButtonTestId));
    });

    expect(cardUpdateSubmit).toHaveBeenCalled();
    expect(cardUpdateSubmit).toHaveBeenCalledWith({
      cardData: {
        card_type: typeData,
        new_password: newPasswordData,
        password: passwordData,
      }
    });
  });
});
