import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import FirstSection from "./FirstSection";

const FirstSectionTestId: string = "FirstSection";
const FirstSectionSubtitleTestId: string = "FirstSectionSubtitle";
const FirstSectionParagraphTestId: string = "FirstSectionParagraph";

describe("FirstSection component tests", () => {
  beforeEach(() => {
    render(<FirstSection />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(FirstSectionTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(FirstSectionTestId)).toHaveClass(
      "flex flex-col items-center text-lg"
    );
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(FirstSectionSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with the correctly tailwind classes", () => {
    expect(screen.getByTestId(FirstSectionSubtitleTestId)).toHaveClass(
      "mb-8 md:mb-12 font-bold text-xl md:text-4xl lg:text-5xl"
    );
  });

  test("Should be able to render the Subtitle with the correctly text", () => {
    expect(screen.getByTestId(FirstSectionSubtitleTestId)).toHaveTextContent(
      "What is TSBank? 🤔"
    );
  });

  test("Should be able to render the Paragraph correctly", () => {
    expect(screen.getByTestId(FirstSectionParagraphTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Paragraph with the correctly tailwind classes", () => {
    expect(screen.getByTestId(FirstSectionParagraphTestId)).toHaveClass(
      "px-2 md:px-4 lg:px-0 text-justify md:text-center md:text-3xl lg:text-4xl"
    );
  });

  test("Should be able to render the Paragraph with the correctly text", () => {
    expect(screen.getByTestId(FirstSectionParagraphTestId)).toHaveTextContent(
      "TSBank is not just a bank; it's a financial companion meticulously crafted to redefine the way you experience banking. Imagine a world where managing your finances is not just a task, but an effortless and enjoyable part of your daily routine."
    );
  });
});
