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
import {
  type editAllAccInfoResponseProps,
  editAllAccInfoSubmit,
  type editAllAccInfoUserResponseProps
} from "./functions";
import EditAllAccInfo from "./EditAllAccInfo";

const nameData: string = "Victor José Lopes Navarro";
const passwordData: string = "testAccount123";
const newEmailData: string = "testAccount2@gmail.com";
const newPasswordData: string = "testAccount123";
const newPhoneData: string = "21212121121";

const ModalTestId: string = "Modal";
const EditAllAccInfoTestId: string = "EditAllAccInfo";
const EditAllAccInfoSubtitleTestId: string = "EditAllAccInfoSubtitle";
const EditAllAccInfoPasswordTestId: string = "EditAllAccInfoPassword";
const EditAllAccInfoNewPasswordTestId: string = "EditAllAccInfoNewPassword";
const EditAllAccInfoNewEmailTestId: string = "EditAllAccInfoNewEmail";
const EditAllAccInfoNewPhoneTestId: string = "EditAllAccInfoNewPhone";
const EditAllAccInfoButtonTestId: string = "EditAllAccInfoButton";

const router = createMemoryRouter(
  [ { path: "/profile/update/all", element: <EditAllAccInfo /> } ],
  { initialEntries: [ "/profile/update/all" ], }
);

const userResult: editAllAccInfoUserResponseProps = {
  "id": 1,
  "name": nameData,
  "email": newEmailData
};

const result: editAllAccInfoResponseProps = {
  success: true,
  message: "your account has been deleted",
  user: userResult
};

vi.mock("./functions", async () => ({
  editAllAccInfoSubmit: vi.fn(async () => {
    return result;
  }),
}));

describe("EditAllAccInfo component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(EditAllAccInfoTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(EditAllAccInfoSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with the correctly tailwind classes", () => {
    expect(screen.getByTestId(EditAllAccInfoSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the Subtitle with the correctly text", () => {
    expect(screen.getByTestId(EditAllAccInfoSubtitleTestId)).toHaveTextContent(
      "Edit All Info"
    );
  });

  test("Should be able to render the NewEmailInput correctly", () => {
    expect(screen.getByTestId(EditAllAccInfoNewEmailTestId)).toBeInTheDocument();
  });

  test("Should be able to render the NewEmailInput with the correctly placeholder", () => {
    expect(screen.getByTestId(EditAllAccInfoNewEmailTestId)).toHaveAttribute(
      "placeholder",
      "New Email"
    );
  });

  test("Should be able to render the NewPasswordInput correctly", () => {
    expect(screen.getByTestId(EditAllAccInfoNewPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the NewPasswordInput with the correctly placeholder", () => {
    expect(screen.getByTestId(EditAllAccInfoNewPasswordTestId)).toHaveAttribute(
      "placeholder",
      "New Password"
    );
  });

  test("Should be able to render the NewPhoneInput correctly", () => {
    expect(screen.getByTestId(EditAllAccInfoNewPhoneTestId)).toBeInTheDocument();
  });

  test("Should be able to render the NewPhoneInput with the correctly placeholder", () => {
    expect(screen.getByTestId(EditAllAccInfoNewPhoneTestId)).toHaveAttribute(
      "placeholder",
      "New Phone"
    );
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(EditAllAccInfoPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput with the correctly placeholder", () => {
    expect(screen.getByTestId(EditAllAccInfoPasswordTestId)).toHaveAttribute(
      "placeholder",
      "Password"
    );
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(EditAllAccInfoButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput with the correctly text", () => {
    expect(screen.getByTestId(EditAllAccInfoButtonTestId)).toHaveTextContent("Change");
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(EditAllAccInfoNewEmailTestId), {
      target: { value: newEmailData },
    });

    expect(screen.getByTestId(EditAllAccInfoNewEmailTestId)).toHaveValue(newEmailData);

    fireEvent.change(screen.getByTestId(EditAllAccInfoNewPasswordTestId), {
      target: { value: newPasswordData },
    });

    expect(screen.getByTestId(EditAllAccInfoNewPasswordTestId)).toHaveValue(newPasswordData);

    fireEvent.change(screen.getByTestId(EditAllAccInfoNewPhoneTestId), {
      target: { value: newPhoneData },
    });

    expect(screen.getByTestId(EditAllAccInfoNewPhoneTestId)).toHaveValue(newPhoneData);

    fireEvent.change(screen.getByTestId(EditAllAccInfoPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(EditAllAccInfoPasswordTestId)).toHaveValue(passwordData);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(EditAllAccInfoButtonTestId));
    });

    expect(editAllAccInfoSubmit).toHaveBeenCalled();
    expect(editAllAccInfoSubmit).toHaveBeenCalledWith({
      userData: {
        new_email: newEmailData,
        new_password: newPasswordData,
        new_phone: newPhoneData,
        password: passwordData,
      }
    });
  });
});
