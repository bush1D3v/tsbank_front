import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import PolicyAndTerms from "./PolicyAndTerms";

const PolicyAndTermsTestId: string = "PolicyAndTerms";
const PolicyLinkTestId: string = "PolicyLink";
const TermsLinkTestId: string = "TermsLink";

describe("PolicyAndTerms component tests", () => {
  beforeEach(() => {
    render(<PolicyAndTerms />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(PolicyAndTermsTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(PolicyAndTermsTestId)).toHaveClass(`
    absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
    text-center md:flex gap-4
    `);
  });

  test("Should be able to render the PolicyLink component with the correctly href", () => {
    expect(screen.getByTestId(PolicyLinkTestId)).toHaveAttribute(
      "href", "https://drive.google.com/file/d/1Mjdv1KKwJpRGx7gDOQ_X80mUAUpsSy7j/view?usp=sharing"
    );
  });

  test("Should be able to render the PolicyLink component with the correctly target", () => {
    expect(screen.getByTestId(PolicyLinkTestId)).toHaveAttribute(
      "target", "_blank"
    );
  });

  test("Should be able to render the PolicyLink component with the correctly rel", () => {
    expect(screen.getByTestId(PolicyLinkTestId)).toHaveAttribute(
      "rel", "noreferrer noopener"
    );
  });

  test("Should be able to render the PolicyLink component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(PolicyLinkTestId)).toHaveClass(
      "underline text-[18px] md:text-2xl lg:text-3xl hover:text-darkBlue transition-all"
    );
  });

  test("Should be able to render the PolicyLink component with the correctly text", () => {
    expect(screen.getByTestId(PolicyLinkTestId)).toHaveTextContent("Policy");
  });

  test("Should be able to render the TermsLink component with the correctly href", () => {
    expect(screen.getByTestId(TermsLinkTestId)).toHaveAttribute(
      "href", "https://drive.google.com/file/d/1YPhg5eVoAGnskfyPtwkGv9ch0qC7ZVyQ/view?usp=sharing"
    );
  });

  test("Should be able to render the TermsLink component with the correctly target", () => {
    expect(screen.getByTestId(TermsLinkTestId)).toHaveAttribute(
      "target", "_blank"
    );
  });

  test("Should be able to render the TermsLink component with the correctly rel", () => {
    expect(screen.getByTestId(TermsLinkTestId)).toHaveAttribute(
      "rel", "noreferrer noopener"
    );
  });

  test("Should be able to render the TermsLink component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TermsLinkTestId)).toHaveClass(
      "underline text-[18px] md:text-2xl lg:text-3xl hover:text-darkBlue transition-all"
    );
  });

  test("Should be able to render the TermsLink component with the correctly text", () => {
    expect(screen.getByTestId(TermsLinkTestId)).toHaveTextContent("Terms");
  });
});
