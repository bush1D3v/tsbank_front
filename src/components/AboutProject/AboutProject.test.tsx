import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import { lpWelcome } from "../../assets/images";
import AboutProject from "./AboutProject";

const AboutProjectTestId: string = "AboutProject";
const AboutProjectTitleTestId: string = "AboutProjectTitle";
const ImageSkeletonLoaderTestId: string = "ImageSkeletonLoader";
const FirstSectionTestId: string = "FirstSection";
const AboutProjectSubtitleTestId: string = "AboutProjectSubtitle";
const SummaryPresentationTestId: string = "SummaryPresentation";

describe("AboutProject component tests", () => {
  beforeEach(() => {
    render(<AboutProject />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(AboutProjectTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(AboutProjectTestId)).toHaveClass(
      `min-h-[82dvh] flex flex-col gap-4 text-center animate-fade-down
      animate-duration-1000 animate-ease-in-out`
    );
  });

  test("Should be able to render the Title correctly", () => {
    expect(screen.getByTestId(AboutProjectTitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Title with the correctly text", () => {
    expect(screen.getByTestId(AboutProjectTitleTestId)).toHaveTextContent(
      "Welcome to TSBank! 🏦💵"
    );
  });

  test("Should be able to render the ImageSkeletonLoader correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the ImageSkeletonLoader with the correctly src", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderTestId)).toHaveAttribute(
        "src", lpWelcome
      );
    }, 2000);
  });

  test("Should be able to render the ImageSkeletonLoader with the correctly alt", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderTestId)).toHaveAttribute(
        "alt", "Welcome Image"
      );
    }, 2000);
  });

  test("Should be able to render the ImageSkeletonLoader with the correctly loading", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderTestId)).toHaveAttribute(
        "loading", "eager"
      );
    }, 2000);
  });

  test("Should be able to render the ImageSkeletonLoader with the correctly sessionStorageItem", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderTestId)).toHaveAttribute(
        "sessionStorageItem", "aboutImageLoaded"
      );
    }, 2000);
  });

  test("Should be able to render the FirstSection correctly", () => {
    expect(screen.getByTestId(FirstSectionTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle correctly", () => {
    expect(screen.getByTestId(AboutProjectSubtitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Subtitle with the correctly text", () => {
    expect(screen.getByTestId(AboutProjectSubtitleTestId)).toHaveTextContent(
      "Who developed it? 👨‍💻"
    );
  });

  test("Should be able to render the SummaryPresentation correctly", () => {
    expect(screen.getByTestId(SummaryPresentationTestId)).toBeInTheDocument();
  });
});
