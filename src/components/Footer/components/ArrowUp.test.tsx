import "@testing-library/jest-dom";
import {
  fireEvent,
  screen,
  render
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  vi,
  beforeEach,
  type Mock,
} from "vitest";
import ArrowUp from "./ArrowUp";

const ArrowUpTestId: string = "ArrowUp";

const handleScroll: Mock = vi.fn();

describe("ArrowUp component tests", () => {
  beforeEach(() => {
    render(<ArrowUp />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ArrowUpTestId)).toBeInTheDocument();
  });

  test("Should be able to fire event", () => {
    global.scrollTo = handleScroll;

    fireEvent.click(screen.getByTestId(ArrowUpTestId));

    expect(handleScroll).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth"
    });
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ArrowUpTestId)).toHaveClass(`
      my-auto text-4xl cursor-pointer hover:text-darkBlue transition-all delay-75
    `);
  });
});
