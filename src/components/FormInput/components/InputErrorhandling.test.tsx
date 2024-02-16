import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import { InputErrorHandling } from "./InputErrorHandling";

const InputErrorHandlingTestId: string = "InputErrorHandling";

const errorMassage: string = "This field is required";

describe("InputErrorHandling component tests", () => {
  beforeEach(() => {
    render(
      <InputErrorHandling
        formState={{
          defaultValues: {
            userData: {
              email: "aa",
              password: "",
            },
          },
          errors: {
            userData: {
              email: {
                type: "required",
                message: errorMassage
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
        }}
        inputDatas="email"
      />
    );
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(InputErrorHandlingTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly text parameter", () => {
    expect(screen.getByTestId(InputErrorHandlingTestId)).toHaveTextContent(errorMassage);
  });

  test("Should be able to render the component with the correctly tailwind class", () => {
    expect(screen.getByTestId(InputErrorHandlingTestId)).toHaveClass(
      "text-error -mb-7 -mt-3 text-left"
    );
  });
});
