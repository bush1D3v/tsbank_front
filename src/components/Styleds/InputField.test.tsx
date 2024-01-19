import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  vi,
  beforeEach,
  type Mock
} from "vitest";
import InputField from "./InputField";

const InputFieldTestId = "InputField";

const testType: string = "email";
const testPlaceholder: string = "Email";
const testValue: string = "test";
const testMaxLength: number = 20;
const testMinLength: number = 10;

const handleChange: Mock = vi.fn();

vi.mock("styled-components", async () => {
  const actual = await vi.importActual("styled-components/dist/styled-components.browser.esm.js");

  return actual;
});

describe("Styleds/InputField component tests", () => {
  beforeEach(() => {
    render(
      <InputField
        type={testType}
        placeholder={testPlaceholder}
        data-testid={InputFieldTestId}
        onChange={handleChange}
        value={testValue}
        maxLength={testMaxLength}
        minLength={testMinLength}
        required
      />
    );

    vi.clearAllMocks();
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(InputFieldTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly placeholder", () => {
    expect(screen.getByTestId(InputFieldTestId)).toHaveAttribute("placeholder", testPlaceholder);
  });

  test("Should be able to fire event", () => {
    fireEvent.change(screen.getByTestId(InputFieldTestId), { target: { value: "a" } });

    expect(handleChange).toHaveBeenCalled();
  });

  test("Should be able to render the component with the correctly stylesheet", () => {
    expect(screen.getByTestId(InputFieldTestId)).toHaveStyle({
      "width": "100%",
      "border-radius": "10px",
      "padding": "1rem 1.5rem",
      "outline": "none"
    });
  });

  test("Should be able to render the component with the correctly type", () => {
    expect(screen.getByTestId(InputFieldTestId)).toHaveAttribute("type", testType);
  });

  test("Should be able to render the component with the correctly value", () => {
    expect(screen.getByTestId(InputFieldTestId)).toHaveValue(testValue);
  });

  test("Should be able to render the component with the correctly max length", () => {
    expect(screen.getByTestId(InputFieldTestId)).toHaveAttribute("maxLength", testMaxLength.toString());
  });

  test("Should be able to render the component with the correctly min length", () => {
    expect(screen.getByTestId(InputFieldTestId)).toHaveAttribute("minLength", testMinLength.toString());
  });

  test("Should be able to render the component with the correctly required", () => {
    expect(screen.getByTestId(InputFieldTestId)).toHaveAttribute("required", "");
  });
});
