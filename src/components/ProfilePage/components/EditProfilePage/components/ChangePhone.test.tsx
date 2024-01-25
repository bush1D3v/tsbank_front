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
import { type changePhoneResponseProps, changePhoneSubmit } from "./functions";
import ChangePhone from "./ChangePhone";

const newPhoneData: string = "12345678000";
const passwordData: string = "testAccount123";

const ModalTestId: string = "Modal";
const ChangePhoneTestId: string = "ChangePhone";
const ChangePhoneSubtitleTestId: string = "ChangePhoneSubtitle";
const ChangePhoneNewPhoneTestId: string = "ChangePhoneNewPhone";
const ChangePhonePasswordTestId: string = "ChangePhonePassword";
const ChangePhoneButtonTestId: string = "ChangePhoneButton";

const router = createMemoryRouter(
  [ { path: "/profile/update/phone", element: <ChangePhone /> } ],
  { initialEntries: [ "/profile/update/phone" ], }
);

const result: changePhoneResponseProps = {
  success: true,
  message: `your phone has been changed successfully, now is '${newPhoneData}'`,
};

vi.mock("./functions", async () => ({
  changePhoneSubmit: vi.fn(async () => {
    return result;
  }),
}));

describe("ChangePhone component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ChangePhoneTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(ChangePhoneSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ChangePhoneSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the Subtitle with the correctly text", () => {
    expect(screen.getByTestId(ChangePhoneSubtitleTestId)).toHaveTextContent(
      "Change Your Phone"
    );
  });

  test("Should be able to render the NewPhoneInput correctly", () => {
    expect(screen.getByTestId(ChangePhoneNewPhoneTestId)).toBeInTheDocument();
  });

  test("Should be able to render the NewPhoneInput with the correctly placeholder", () => {
    expect(screen.getByTestId(ChangePhoneNewPhoneTestId)).toHaveAttribute(
      "placeholder",
      "New Phone"
    );
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(ChangePhonePasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput with the correctly placeholder", () => {
    expect(screen.getByTestId(ChangePhonePasswordTestId)).toHaveAttribute(
      "placeholder",
      "Password"
    );
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(ChangePhoneButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput with the correctly placeholder", () => {
    expect(screen.getByTestId(ChangePhoneButtonTestId)).toHaveTextContent(
      "Change"
    );
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(ChangePhoneNewPhoneTestId), {
      target: { value: newPhoneData },
    });

    expect(screen.getByTestId(ChangePhoneNewPhoneTestId)).toHaveValue(newPhoneData);

    fireEvent.change(screen.getByTestId(ChangePhonePasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(ChangePhonePasswordTestId)).toHaveValue(passwordData);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(ChangePhoneButtonTestId));
    });

    expect(changePhoneSubmit).toHaveBeenCalled();
    expect(changePhoneSubmit).toHaveBeenCalledWith({
      userData: {
        new_phone: newPhoneData,
        password: passwordData,
      }
    });
  });
});
