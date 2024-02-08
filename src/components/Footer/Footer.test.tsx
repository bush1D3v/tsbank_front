import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import Footer from "./Footer";

const FooterTestId: string = "Footer";
const PolicyAndTermsTestId: string = "PolicyAndTerms";
const CopyrightTextTestId: string = "CopyrightText";
const DedicationTextTestId: string = "DedicationText";

describe("Footer component tests", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(FooterTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(FooterTestId)).toHaveClass(`
      text-sm bg-saturatedBlue flex h-[9dvh] justify-between py-2 px-4
      relative animate-fade-down animate-duration-500 animate-ease-in-out
    `);
  });

  test("Should be able to render the componente with the PolicyAndTerms component", () => {
    expect(screen.getByTestId(PolicyAndTermsTestId)).toBeInTheDocument();
  });

  test("Should be able to render the componente with the CopyrightText component", () => {
    expect(screen.getByTestId(CopyrightTextTestId)).toBeInTheDocument();
  });

  test("Should be able to render the componente with the DedicationText component", () => {
    expect(screen.getByTestId(DedicationTextTestId)).toBeInTheDocument();
  });
});
