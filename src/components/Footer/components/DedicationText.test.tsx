import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import DedicationText from "./DedicationText";

const DedicationTextTestId: string = "DedicationText";
const DedicationTextLinkTestId: string = "DedicationTextLink";

describe("DedicationText component tests", () => {
  beforeEach(() => {
    render(<DedicationText />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(DedicationTextTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(DedicationTextTestId)).toHaveClass(`
      text-center lg:text-xl
    `);
  });

  test("Should be able to render the component with the correctly text", () => {
    expect(screen.getByTestId(DedicationTextTestId)).toHaveTextContent("Made with 💖 by");
  });

  test("Should be able to render the Link component with the correctly href", () => {
    expect(screen.getByTestId(DedicationTextLinkTestId)).toHaveAttribute(
      "href", "https://bushi-links.vercel.app/"
    );
  });

  test("Should be able to render the Link component with the correctly target", () => {
    expect(screen.getByTestId(DedicationTextLinkTestId)).toHaveAttribute(
      "target", "_blank"
    );
  });

  test("Should be able to render the Link component with the correctly rel", () => {
    expect(screen.getByTestId(DedicationTextLinkTestId)).toHaveAttribute(
      "rel", "noreferrer noopener"
    );
  });

  test("Should be able to render the Link component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(DedicationTextLinkTestId)).toHaveClass(`
      font-bold underline cursor-pointer hover:text-darkBlue transition-all
    `);
  });

  test("Should be able to render the Link component with the correctly text", () => {
    expect(screen.getByTestId(DedicationTextLinkTestId)).toHaveTextContent("bush1D3v");
  });
});
