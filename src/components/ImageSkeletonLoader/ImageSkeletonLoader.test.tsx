import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import ImageSkeletonLoader from "./ImageSkeletonLoader";

const ImageSkeletonLoaderTestId: string = "ImageSkeletonLoader";
const SkeletonTestId: string = "Skeleton";
const ImageSkeletonLoaderImageTestId: string = "Image";

type TestLoading = "lazy" | "eager";

const testSrc: string = "https://www.gstatic.com/webp/gallery/1.jpg";
const testAlt: string = "alt";
const testLoading: TestLoading = "eager";
const testSessionStorageItem: string = "test";

describe("ImageSkeletonLoader component tests", () => {
  beforeEach(() => {
    render(
      <ImageSkeletonLoader
        src={testSrc}
        alt={testAlt}
        loading={testLoading}
        sessionStorageItem={testSessionStorageItem}
      />
    );
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ImageSkeletonLoaderTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly sessionStorageItem", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderTestId)).toHaveAttribute("sessionStorageItem", testSessionStorageItem);
    }, 2000);
  });

  test("Should be able to render the Skeleton correctly", () => {
    expect(screen.getByTestId(SkeletonTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Image correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderImageTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the Image with the correctly src", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderImageTestId)).toHaveAttribute("src", testSrc);
    }, 2000);
  });

  test("Should be able to render the Image with the correctly alt", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderImageTestId)).toHaveAttribute("alt", testAlt);
    }, 2000);
  });

  test("Should be able to render the Image with the correctly loading", () => {
    setTimeout(() => {
      expect(screen.getByTestId(ImageSkeletonLoaderImageTestId)).toHaveAttribute("loading", testLoading);
    }, 2000);
  });
});
