import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import BalanceDivision from "./BalanceDivision";

const formattedBalance: string = "$2.500,00";

const BalanceDivisionTestId: string = "BalanceDivision";
const BalanceDivisionIconTestId: string = "BalanceDivisionIcon";
const BalanceDivisionValueTestId: string = "BalanceDivisionValue";

describe("BalanceDivision component tests", () => {
  beforeEach(() => {
    render(<BalanceDivision balance={formattedBalance} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(BalanceDivisionTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(BalanceDivisionTestId)).toHaveClass(
      "flex gap-4 justify-center w-full animate-fade-down animate-duration-700 animate-ease-in-out"
    );
  });

  test("Should be able to render the Icon correctly", () => {
    expect(screen.getByTestId(BalanceDivisionIconTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Icon with the correctly tailwind classes", () => {
    expect(screen.getByTestId(BalanceDivisionIconTestId)).toHaveClass(
      "w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
    );
  });

  test("Should be able to render the Value correctly", () => {
    expect(screen.getByTestId(BalanceDivisionValueTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Value with the correctly text", () => {
    expect(screen.getByTestId(BalanceDivisionValueTestId)).toHaveTextContent(
      formattedBalance
    );
  });

  test("Should be able to render the Value with the correctly tailwind classes", () => {
    expect(screen.getByTestId(BalanceDivisionValueTestId)).toHaveClass(
      "text-2xl md:text-3xl lg:text-4xl"
    );
  });
});
