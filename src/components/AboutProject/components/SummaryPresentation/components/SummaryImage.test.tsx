import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import SummaryImage from "./SummaryImage";

const SummaryImageTestId: string = "SummaryImage";
const SummaryImageImageTestId: string = "SummaryImageImage";

describe("SummaryImage component tests", () => {
  beforeEach(() => {
    render(<SummaryImage />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(SummaryImageTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(SummaryImageTestId)).toHaveClass(
      "w-2/4 md:w-2/6 lg:w-8/12 rounded-full hover:scale-105 cursor-pointer transition-all delay-75"
    );
  });

  test("Should be able to render the component with the correctly href", () => {
    expect(screen.getByTestId(SummaryImageTestId)).toHaveAttribute("href", "https://github.com/bush1D3v");
  });

  test("Should be able to render the component with the correctly target", () => {
    expect(screen.getByTestId(SummaryImageTestId)).toHaveAttribute("target", "_blank");
  });

  test("Should be able to render the component with the correctly rel", () => {
    expect(screen.getByTestId(SummaryImageTestId)).toHaveAttribute("rel", "noreferrer noopener");
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(SummaryImageImageTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly src", () => {
    expect(screen.getByTestId(SummaryImageImageTestId)).toHaveAttribute("src", "https://avatars.githubusercontent.com/u/133554156?v=4");
  });

  test("Should be able to render the component with the correctly alt", () => {
    expect(screen.getByTestId(SummaryImageImageTestId)).toHaveAttribute("alt", "Victor photo");
  });

  test("Should be able to render the component with the correctly loading", () => {
    expect(screen.getByTestId(SummaryImageImageTestId)).toHaveAttribute("loading", "lazy");
  });
});
