import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import Loading from "./Loading";

const LoadingTestId: string = "Loading";

describe("Loading component tests", () => {
  beforeEach(() => {
    render(<Loading />);
  });
  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(LoadingTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(LoadingTestId)).toHaveClass(`
      fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
      bg-blueBase w-full h-[82%] flex justify-center items-center`
    );
  });
});
