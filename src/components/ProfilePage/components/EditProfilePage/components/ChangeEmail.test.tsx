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
  vi
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { type changeEmailResponseProps, changeEmailSubmit } from "./functions";
import ChangeEmail from "./ChangeEmail";

const newEmailData: string = "testAccount2@gmail.com";
const passwordData: string = "testAccount123";

const ModalTestId: string = "Modal";
const ChangeEmailTestId: string = "ChangeEmail";
const ChangeEmailSubtitleTestId: string = "ChangeEmailSubtitle";
const ChangeEmailEmailTestId: string = "ChangeEmailNewEmail";
const ChangeEmailPasswordTestId: string = "ChangeEmailPassword";
const ChangeEmailButtonTestId: string = "ChangeEmailButton";

const router = createMemoryRouter(
  [ { path: "/profile/update/email", element: <ChangeEmail /> } ],
  { initialEntries: [ "/profile/update/email" ], }
);

const result: changeEmailResponseProps = {
  success: true,
  message: `your email has been changed successfully, now is '${newEmailData}'`
};

vi.mock("./functions", async () => ({
  changeEmailSubmit: vi.fn(async () => {
    return result;
  }),
}));

describe("ChangeEmail component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ChangeEmailTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(ChangeEmailSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ChangeEmailSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(ChangeEmailSubtitleTestId)).toHaveTextContent(
      "Change Your Email"
    );
  });

  test("Should be able to render the NewEmailInput correctly", () => {
    expect(screen.getByTestId(ChangeEmailEmailTestId)).toBeInTheDocument();
  });

  test("Should be able to render the NewEmailInput with the correctly placeholder", () => {
    expect(screen.getByTestId(ChangeEmailEmailTestId)).toHaveAttribute(
      "placeholder",
      "New Email"
    );
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(ChangeEmailPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput with the correctly placeholder", () => {
    expect(screen.getByTestId(ChangeEmailPasswordTestId)).toHaveAttribute(
      "placeholder",
      "Password"
    );
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(ChangeEmailButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(ChangeEmailEmailTestId), {
      target: { value: newEmailData },
    });

    expect(screen.getByTestId(ChangeEmailEmailTestId)).toHaveValue(newEmailData);

    fireEvent.change(screen.getByTestId(ChangeEmailPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(ChangeEmailPasswordTestId)).toHaveValue(passwordData);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(ChangeEmailButtonTestId));
    });

    expect(changeEmailSubmit).toHaveBeenCalled();
    expect(changeEmailSubmit).toHaveBeenCalledWith({
      userData: {
        new_email: newEmailData,
        password: passwordData,
      }
    });
  });
});
