import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import Skeleton from "./Skeleton";

const SkeletonTestId: string = "Skeleton";
const SkeletonBackgroundTestId: string = "SkeletonBackground";
const SkeletonIconTestId: string = "SkeletonIcon";

describe("Skeleton component tests", () => {
  beforeEach(() => {
    render(<Skeleton />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(SkeletonTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(SkeletonTestId)).toHaveClass(`
      border p-4 rounded shadow-2xl w-[98dvw] h-[90dvw] md:min-w-[450px] md:max-w-[450px] md:h-[450px] my-5
    `);
  });

  test("Should be able to render the SkeletonBackground correctly", () => {
    expect(screen.getByTestId(SkeletonBackgroundTestId)).toBeInTheDocument();
  });

  test("Should be able to render the SkeletonBackground with the correctly tailwind classes", () => {
    expect(screen.getByTestId(SkeletonBackgroundTestId)).toHaveClass(`
      relative h-full mb-4 flex justify-center items-center bg-gray-300 animate-pulse
    `);
  });

  test("Should be able to render the SkeletonIcon correctly", () => {
    expect(screen.getByTestId(SkeletonIconTestId)).toBeInTheDocument();
  });

  test("Should be able to render the SkeletonIcon with the correctly tailwind classes", () => {
    expect(screen.getByTestId(SkeletonIconTestId)).toHaveClass(`
      w-10 h-10 text-gray-600
    `);
  });
});
