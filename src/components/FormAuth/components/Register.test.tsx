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
import { type registerResponseProps, registerSubmit } from "./functions";
import Register from "./Register";

const emailData: string = "testAccount@gmail.com";
const passwordData: string = "testAccount123";
const nameData: string = "Victor José Lopes Navarro";
const phoneData: string = "21212121211";
const cpfData: string = "21212121536";

const RegisterTestId: string = "Register";
const ModalTestId: string = "Modal";
const RegisterSubtitleTestId: string = "RegisterSubtitle";
const RegisterNameTestId: string = "NameRegister";
const RegisterEmailTestId: string = "EmailRegister";
const RegisterCpfTestId: string = "CpfRegister";
const RegisterPhoneTestId: string = "PhoneRegister";
const RegisterPasswordTestId: string = "PasswordRegister";
const RegisterButtonTestId: string = "ButtonRegister";
const RegisterSpanTestId: string = "SpanRegister";

const router = createMemoryRouter(
  [ { path: "/register", element: <Register /> } ],
  { initialEntries: [ "/register" ], }
);

const result: registerResponseProps = {
  success: true,
  message: "User registered successfully!"
};

vi.mock("./functions", async () => ({
  registerSubmit: vi.fn(async () => {
    return result;
  }),
}));

describe("Register component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(RegisterTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ModalTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(RegisterSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(RegisterSubtitleTestId)).toHaveTextContent(
      "Sign up"
    );
  });

  test("Should be able to render the Subtitle with correctly tailwind classes", () => {
    expect(screen.getByTestId(RegisterSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the NameInput correctly", () => {
    expect(screen.getByTestId(RegisterNameTestId)).toBeInTheDocument();
  });

  test("Should be able to render the EmailInput correctly", () => {
    expect(screen.getByTestId(RegisterEmailTestId)).toBeInTheDocument();
  });

  test("Should be able to render the CpfInput correctly", () => {
    expect(screen.getByTestId(RegisterCpfTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PhoneInput correctly", () => {
    expect(screen.getByTestId(RegisterPhoneTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(RegisterPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(RegisterButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Span correctly", () => {
    expect(screen.getByTestId(RegisterSpanTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(RegisterNameTestId), {
      target: { value: nameData },
    });

    expect(screen.getByTestId(RegisterNameTestId)).toHaveValue(nameData);

    fireEvent.change(screen.getByTestId(RegisterEmailTestId), {
      target: { value: emailData },
    });

    expect(screen.getByTestId(RegisterEmailTestId)).toHaveValue(emailData);

    fireEvent.change(screen.getByTestId(RegisterCpfTestId), {
      target: { value: cpfData },
    });

    expect(screen.getByTestId(RegisterCpfTestId)).toHaveValue(cpfData);

    fireEvent.change(screen.getByTestId(RegisterPhoneTestId), {
      target: { value: phoneData },
    });

    expect(screen.getByTestId(RegisterPhoneTestId)).toHaveValue(phoneData);

    fireEvent.change(screen.getByTestId(RegisterPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(RegisterPasswordTestId)).toHaveValue(passwordData);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(RegisterButtonTestId));
    });

    expect(registerSubmit).toHaveBeenCalled();
    expect(registerSubmit).toHaveBeenCalledWith({
      userData: {
        name: nameData,
        email: emailData,
        cpf: cpfData,
        phone: phoneData,
        password: passwordData,
      }
    });
  });
});
