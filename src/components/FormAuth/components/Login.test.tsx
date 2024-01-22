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
import { type loginResponseProps, loginSubmit } from "./functions";
import Login from "./Login";

const emailData: string = "testAccount@gmail.com";
const passwordData: string = "testAccount123";

const LoginTestId: string = "Login";
const LoginModalTestId: string = "Login";
const LoginSubtitleTestId: string = "SubtitleLogin";
const LoginEmailTestId: string = "EmailLogin";
const LoginPasswordTestId: string = "PasswordLogin";
const LoginButtonTestId: string = "ButtonLogin";
const LoginSpanTestId: string = "SpanLogin";

const router = createMemoryRouter(
  [ { path: "/login", element: <Login /> } ],
  { initialEntries: [ "/login" ], }
);

const result: loginResponseProps = {
  success: true,
  message: "Login completed!",
  userData: {
    "user": {
      "id": 75,
      "cpf": "21212121536",
      "name": "Victor José Lopes Navarro",
      "email": emailData,
      "phone": "21212121211",
      "balance": 0,
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsImlhdCI6MTcwNTg3NjUxNywiZXhwIjoxNzA1OTYyOTE3fQ.Ixaq8aiAQEKHYpAkpNXnw0WZebNAbU8_fIS1Z2pYEss"
  }
};

vi.mock("./functions", async () => ({
  loginSubmit: vi.fn(async () => {
    return result;
  }),
}));

describe("Login component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(LoginTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Modal correctly", () => {
    expect(screen.getByTestId(LoginModalTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(LoginSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with correctly text", () => {
    expect(screen.getByTestId(LoginSubtitleTestId)).toHaveTextContent(
      "Sign in"
    );
  });

  test("Should be able to render the Subtitle with correctly tailwind classes", () => {
    expect(screen.getByTestId(LoginSubtitleTestId)).toHaveClass(
      "font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
    );
  });

  test("Should be able to render the EmailInput correctly", () => {
    expect(screen.getByTestId(LoginEmailTestId)).toBeInTheDocument();
  });

  test("Should be able to render the PasswordInput correctly", () => {
    expect(screen.getByTestId(LoginPasswordTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Span correctly", () => {
    expect(screen.getByTestId(LoginSpanTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Span with correctly tailwind classes", () => {
    expect(screen.getByTestId(LoginSpanTestId)).toHaveClass(
      "text-lg"
    );
  });

  test("Should be able to render the ButtonInput correctly", () => {
    expect(screen.getByTestId(LoginButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to submit the form correctly", async () => {
    fireEvent.change(screen.getByTestId(LoginEmailTestId), {
      target: { value: emailData },
    });

    expect(screen.getByTestId(LoginEmailTestId)).toHaveValue(emailData);

    fireEvent.change(screen.getByTestId(LoginPasswordTestId), {
      target: { value: passwordData },
    });

    expect(screen.getByTestId(LoginPasswordTestId)).toHaveValue(passwordData);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId(LoginButtonTestId));
    });

    expect(loginSubmit).toHaveBeenCalled();
    expect(loginSubmit).toHaveBeenCalledWith({
      userData: {
        email: emailData,
        password: passwordData,
      }
    });
  });
});
