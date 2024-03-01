import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import AnchorLink from "./AnchorLink";
import { ROUTER_BASE_URL } from "@/utils/routerPaths";

const AnchorLinkTestId: string = "AnchorLink";

const testText: string = "testText";
const testParam: string = "/testParam";

describe("AnchorLink component tests", () => {
  beforeEach(() => {
    render(
      <AnchorLink
        text={testText}
        param={testParam}
        buttonBg="bg-saturatedBlue hover:bg-transparent"
      />
    );
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(AnchorLinkTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly text parameter", () => {
    expect(screen.getByTestId(AnchorLinkTestId)).toHaveTextContent(testText);
  });

  test("Should be able to render the component with the correctly param parameter", () => {
    fireEvent.click(screen.getByTestId(AnchorLinkTestId));

    expect(screen.getByTestId(AnchorLinkTestId)).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${testParam}`
    );
  });

  test("Should be able to render the component with the correctly button background", () => {
    expect(screen.getByTestId(AnchorLinkTestId)).toHaveClass("bg-saturatedBlue hover:bg-transparent");
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(AnchorLinkTestId)).toHaveClass(`
      bg-saturatedBlue hover:bg-transparent px-3 md:py-1 lg:px-3 xl:px-4 border-white
      cursor-pointer rounded-xl border-2 font-bold hover:scale-110 transition-all
      delay-75 ease-in-out w-full text-center flex justify-center items-center
    `);
  });

  test("Should be able to fire event", () => {
    fireEvent.click(screen.getByTestId(AnchorLinkTestId));

    expect(screen.getByTestId(AnchorLinkTestId)).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${testParam}`
    );
  });
});
