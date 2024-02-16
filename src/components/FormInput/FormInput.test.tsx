import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  vi,
  beforeEach,
} from "vitest";
import FormInput from "./FormInput";

const FormInputTestId: string = "FormInput";
const InputErrorHandlingTestId: string = "InputErrorHandling";

const placeholder: string = "Email";
const inputLabel = "email";

describe("FormInput component tests", () => {
  beforeEach(() => {
    render(
      <FormInput
        placeholder={placeholder}
        inputLabel={inputLabel}
        formMethods={{
          trigger: vi.fn(),
          handleSubmit: vi.fn(),
          register: vi.fn(),
          formState: {
            defaultValues: {
              userData: {
                email: "",
                password: "",
              },
            },
            errors: {
              userData: {
                email: {
                  type: "required",
                  message: "This field is required"
                }
              }
            },
            isDirty: false,
            isLoading: false,
            isSubmitted: false,
            isSubmitSuccessful: false,
            isSubmitting: false,
            isValidating: false,
            isValid: false,
            disabled: false,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {}
          }
        }}
        data-testid={FormInputTestId}
      />
    );
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(FormInputTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly placeholder", () => {
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  test("Should be able to render the InputErrorHandling component correctly", () => {
    fireEvent.click(screen.getByTestId(FormInputTestId));

    fireEvent.change(screen.getByTestId(FormInputTestId), {
      target: { value: "email" },
    });

    expect(screen.getByTestId(InputErrorHandlingTestId)).toBeInTheDocument();
  });
});
