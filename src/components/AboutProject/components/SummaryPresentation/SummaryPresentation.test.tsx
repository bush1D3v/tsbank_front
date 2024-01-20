import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import SummaryPresentation from "./SummaryPresentation";

const SummaryPresentationTestId: string = "SummaryPresentation";
const SummaryImageTestId: string = "SummaryImage";
const SummaryTextTestId: string = "SummaryText";

describe("SummaryPresentation component tests", () => {
  beforeEach(() => {
    render(<SummaryPresentation />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(SummaryPresentationTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(SummaryPresentationTestId)).toHaveClass(
      "flex flex-col items-center gap-4 lg:flex-row"
    );
  });

  test("Should be able to render the SummaryImage correctly", () => {
    expect(screen.getByTestId(SummaryImageTestId)).toBeInTheDocument();
  });

  test("Should be able to render the SummaryText correctly", () => {
    expect(screen.getByTestId(SummaryTextTestId)).toBeInTheDocument();
  });
});
