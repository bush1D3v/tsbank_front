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
import Button from "./Button";

const ButtonTestId = "Button";

const testText: string = "testText";

const handleClick: Mock = vi.fn();

vi.mock("styled-components", async () => {
  const actual = await vi.importActual("styled-components/dist/styled-components.browser.esm.js");

  return actual;
});

describe("Styleds/Button component tests", () => {
  beforeEach(() => {
    render(
      <Button
        onClick={handleClick}
        data-testid={ButtonTestId}
      >
        {testText}
      </Button>
    );
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ButtonTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly text", () => {
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test("Should be able to fire event", () => {
    fireEvent.click(screen.getByTestId(ButtonTestId));

    expect(handleClick).toHaveBeenCalled();
  });

  test("Should be able to render the component with the correctly stylesheet", () => {
    expect(screen.getByTestId(ButtonTestId)).toHaveStyle({
      "font-weight": "700",
      "padding": "1rem 0",
      "min-width": "100%",
      "border-radius": "10px",
      "font-size": "1.25rem",
      "line-height": "1.75rem",
      "transition": "all 400ms",
    });
  });
});
