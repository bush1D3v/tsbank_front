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
import { type changePasswordResponseProps, changePasswordSubmit } from "./functions";
import ChangePassword from "./ChangePassword";

const passwordData: string = "testAccount123";
const newPasswordData: string = "testAccount123";

const ModalTestId: string = "Modal";
const ChangePasswordTestId: string = "ChangePassword";
const ChangePasswordSubtitleTestId: string = "ChangePasswordSubtitle";
const ChangePasswordNewPasswordTestId: string = "ChangePasswordNewPassword";
const ChangePasswordPasswordTestId: string = "ChangePasswordPassword";
const ChangePasswordButtonTestId: string = "ChangePasswordButton";

const router = createMemoryRouter(
  [ { path: "/profile/update/password", element: <ChangePassword /> } ],
  { initialEntries: [ "/profile/update/password" ], }
);

const result: changePasswordResponseProps = {
  success: true,
  message: "your password has been changed successfully"
};

vi.mock("./functions", async () => ({
  changePasswordSubmit: vi.fn(async () => {
    return result;
  }),
}));

describe("Register component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ChangePasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(ChangePasswordSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with the correctly text", () => {
    expect(screen.getByTestId(ChangePasswordSubtitleTestId)).toHaveTextContent(
      "Change Your Password"
    );
  });

  test("Should be able to render the Subtitle with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ChangePasswordSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the NewPasswordInput correctly", () => {
    expect(screen.getByTestId(ChangePasswordNewPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the NewPasswordInput with the correctly placeholder", () => {
    expect(screen.getByTestId(ChangePasswordNewPasswordTestId)).toHaveAttribute(
      "placeholder",
      "New Password"
    );
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(ChangePasswordPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput with the correctly placeholder", () => {
    expect(screen.getByTestId(ChangePasswordPasswordTestId)).toHaveAttribute(
      "placeholder",
      "Password"
    );
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(ChangePasswordButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(ChangePasswordNewPasswordTestId), {
      target: { value: newPasswordData },
    });

    expect(screen.getByTestId(ChangePasswordNewPasswordTestId)).toHaveValue(newPasswordData);

    fireEvent.change(screen.getByTestId(ChangePasswordPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(ChangePasswordPasswordTestId)).toHaveValue(passwordData);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(ChangePasswordButtonTestId));
    });

    expect(changePasswordSubmit).toHaveBeenCalled();
    expect(changePasswordSubmit).toHaveBeenCalledWith({
      userData: {
        new_password: newPasswordData,
        password: passwordData,
      }
    });
  });
});
