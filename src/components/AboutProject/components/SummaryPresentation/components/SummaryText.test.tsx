import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import SummaryText from "./SummaryText";

const SummaryTextTestId: string = "SummaryText";
const SummaryTextAnchorTestId: string = "Anchor";

describe("SummaryText component tests", () => {
  beforeEach(() => {
    render(<SummaryText />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(SummaryTextTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(SummaryTextTestId)).toHaveClass(
      "px-2 md:px-4 lg:px-0 text-justify md:text-center md:text-3xl lg:text-4xl"
    );
  });

  test("Should be able to render the component with the correctly text", () => {
    expect(screen.getByTestId(SummaryTextTestId)).toHaveTextContent(
      "My name is Victor Navarro, and I have been a software developer since 2023. I am a software engineering student at college"
    );
  });

  test("Should be able to render the Anchors correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(SummaryTextAnchorTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the first Anchor with the correctly text", () => {
    setTimeout(() => {
      expect(screen.getByTestId(SummaryTextAnchorTestId)).toHaveAttribute(
        "text", "Cruzeiro do Sul"
      );
    }, 2000);
  });

  test("Should be able to render the first Anchor with the correctly link", () => {
    setTimeout(() => {
      expect(screen.getByTestId(SummaryTextAnchorTestId)).toHaveAttribute(
        "link", "https://www.cruzeirodosulvirtual.com.br/"
      );
    }, 2000);
  });

  test("Should be able to render the second Anchor with the correctly text", () => {
    setTimeout(() => {
      expect(screen.getByTestId(SummaryTextAnchorTestId)).toHaveAttribute(
        "text", " Nasajon"
      );
    }, 2000);
  });

  test("Should be able to render the second Anchor with the correctly link", () => {
    setTimeout(() => {
      expect(screen.getByTestId(SummaryTextAnchorTestId)).toHaveAttribute(
        "link", "https://nasajon.com.br/"
      );
    }, 2000);
  });
});
