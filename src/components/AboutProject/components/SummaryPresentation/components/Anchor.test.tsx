import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import Anchor from "./Anchor";

const AnchorTestId: string = "Anchor";

const testText: string = "test";
const testLink: string = "https://www.google.com/";

describe("Anchor component tests", () => {
  beforeEach(() => {
    render(
      <Anchor
        text={testText}
        link={testLink}
      />
    );
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(AnchorTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(AnchorTestId)).toHaveClass(
      "underline hover:text-darkBlue transition-all"
    );
  });

  test("Should be able to render the component with the correctly text", () => {
    expect(screen.getByTestId(AnchorTestId)).toHaveTextContent(testText);
  });

  test("Should be able to render the component with the correctly link", () => {
    expect(screen.getByTestId(AnchorTestId)).toHaveAttribute("href", testLink);
  });

  test("Should be able to render the component with the correctly target", () => {
    expect(screen.getByTestId(AnchorTestId)).toHaveAttribute("target", "_blank");
  });

  test("Should be able to render the component with the correctly rel", () => {
    expect(screen.getByTestId(AnchorTestId)).toHaveAttribute("rel", "noreferrer noopener");
  });
});
