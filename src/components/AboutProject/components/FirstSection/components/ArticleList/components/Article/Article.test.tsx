import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import Article from "./Article";

const ArticleTestId: string = "Article";
const ImageSkeletonLoaderTestId: string = "ImageSkeletonLoader";

type rowDirectionProps = "lg:flex-row" | "lg:flex-row-reverse";

const testText: string = "test";
const testImage: string = "https://www.gstatic.com/webp/gallery/1.jpg";
const testImageAlt: string = "alt";
const testRowDirection: rowDirectionProps = "lg:flex-row";

describe("Article component tests", () => {
  beforeEach(() => {
    render(
      <Article
        text={testText}
        image={testImage}
        imageAlt={testImageAlt}
        rowDirection={testRowDirection}
      />
    );
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ArticleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ArticleTestId)).toHaveClass(`
      flex items-center gap-4 flex-col ${testRowDirection}
    `);
  });

  test("Should be able to render the component with the correctly text", () => {
    expect(screen.getByTestId(ArticleTestId)).toHaveTextContent(testText);
  });

  test("Should be able to render the ImageSkeletonLoader with the correctly src", async () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderTestId)).toHaveAttribute("src", testImage);
    }, 2000);
  });

  test("Should be able to render the ImageSkeletonLoader with the correctly alt", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderTestId)).toHaveAttribute("alt", testImageAlt);
    }, 2000);
  });
});
