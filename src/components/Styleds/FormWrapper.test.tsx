import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  vi,
  beforeEach
} from "vitest";
import FormWrapper from "./FormWrapper";

const FormWrapperTestId: string = "FormWrapper";

vi.mock("styled-components", async () => {
  const actual = await vi.importActual("styled-components/dist/styled-components.browser.esm.js");

  return actual;
});

describe("Styleds/FormWrapper component tests", () => {
  beforeEach(() => {
    render(
      <FormWrapper
        data-testid={FormWrapperTestId}
      />
    );
  });
  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(FormWrapperTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly stylesheet", () => {
    expect(screen.getByTestId(FormWrapperTestId)).toHaveStyle({
      "display": "flex",
      "flex-flow": "column wrap",
      "align-items": "center",
      "justify-content": "space-evenly",
      "width": "90%",
      "text-align": "center",
      "border-radius": "40px",
      "gap": "20px"
    });
  });
});
