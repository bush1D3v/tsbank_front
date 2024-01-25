import "@testing-library/jest-dom";
import {
  screen,
  render,
  fireEvent
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  vi
} from "vitest";
import LoadMoreButton from "./LoadMoreButton";

const LoadMoreButtonTestId: string = "LoadMoreButton";

const handleLinkClick: () => void = vi.fn();

describe("LoadMoreButton", () => {
  test("should render correctly", () => {
    render(<LoadMoreButton loading={false} onclick={handleLinkClick} />);
    expect(screen.getByTestId(LoadMoreButtonTestId)).toBeInTheDocument();
  });

  test("should render with the correct tailwind classes", () => {
    render(<LoadMoreButton loading={false} onclick={handleLinkClick} />);
    expect(screen.getByTestId(LoadMoreButtonTestId)).toHaveClass(
      "bg-darkBlue hover:bg-saturatedBlue text-whiteBlue mt-4 rounded-xl p-2 md:p-3 lg:p-4 md:text-xl lg:text-2xl cursor-pointer transition-all delay-75 ease-in-out border-2 border-saturatedBlue"
    );
  });

  test("should render with the correct text", () => {
    render(<LoadMoreButton loading={false} onclick={handleLinkClick} />);
    expect(screen.getByTestId(LoadMoreButtonTestId)).toHaveTextContent("Load More");
  });

  test("should render with the correct text when loading", () => {
    render(<LoadMoreButton loading={true} onclick={() => true} />);
    expect(screen.getByTestId(LoadMoreButtonTestId)).toHaveTextContent("Loading...");
  });

  test("should fire event when clicked", () => {
    render(<LoadMoreButton loading={false} onclick={handleLinkClick} />);
    fireEvent.click(screen.getByTestId(LoadMoreButtonTestId));
    expect(handleLinkClick).toHaveBeenCalled();
  });
});
