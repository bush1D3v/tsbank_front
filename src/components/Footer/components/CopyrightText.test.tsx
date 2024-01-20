import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import CopyrightText from "./CopyrightText";

const CopyrightTextTestId: string = "CopyrightText";

describe("CopyrightText component tests", () => {
  beforeEach(() => {
    render(<CopyrightText />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(CopyrightTextTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(CopyrightTextTestId)).toHaveClass(`
      lg:text-xl self-center
    `);
  });

  test("Should be able to render the component with the correctly text content", () => {
    expect(screen.getByTestId(CopyrightTextTestId)).toHaveTextContent("TSBank Corporation ©");
  });
});
