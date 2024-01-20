import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import Paragraph from "./Paragraph";

const ParagraphTestId = "ParagraphTestId";

describe("Paragraph component tests", () => {
  beforeEach(() => {
    render(<Paragraph text="test" />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ParagraphTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly text", () => {
    expect(screen.getByTestId(ParagraphTestId)).toHaveTextContent("test");
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ParagraphTestId)).toHaveClass(
      "px-2 md:px-4 lg:px-0 text-justify md:text-center md:text-3xl lg:text-4xl"
    );
  });
});
