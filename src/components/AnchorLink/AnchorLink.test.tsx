import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  vi
} from "vitest";
import AnchorLink from "./AnchorLink";

const AnchorLinkTestId = "AnchorLink";

describe("AnchorLink component tests", () => {
  test("Should be able to render the component correctly", () => {
    const { getByTestId } = render(
      <AnchorLink
        func={() => { }}
        text="test"
        param="test"
        buttonBg="bg-saturatedBlue hover:bg-transparent"
      />
    );

    expect(getByTestId(AnchorLinkTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with correctly  text", () => {
    const { getByTestId } = render(
      <AnchorLink
        func={() => { }}
        text="TestText"
        param="test"
        buttonBg="bg-saturatedBlue hover:bg-transparent"
      />
    );

    expect(getByTestId(AnchorLinkTestId)).toHaveTextContent("TestText");
  });

  test("Should be able to render the component with correctly button background", () => {
    const { getByTestId } = render(
      <AnchorLink
        func={() => { }}
        text="Button"
        param="test"
        buttonBg="bg-saturatedBlue hover:bg-transparent"
      />
    );

    expect(getByTestId(AnchorLinkTestId)).toHaveClass("bg-saturatedBlue hover:bg-transparent");
  });

  test("Should be able to have default style", () => {
    const { getByTestId } = render(
      <AnchorLink
        func={() => { }}
        text="Button"
        param="test"
        buttonBg="bg-saturatedBlue hover:bg-transparent"
      />
    );

    expect(getByTestId(AnchorLinkTestId)).toHaveClass(`
      bg-saturatedBlue hover:bg-transparent px-3 md:py-1 lg:px-3 xl:px-4 border-white
      cursor-pointer rounded-xl border-2 font-bold hover:scale-110 transition-all
      delay-75 ease-in-out w-full text-center flex justify-center items-center
    `);
  });

  test("Should be able to fire event", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(
      <AnchorLink
        func={handleClick}
        text="Button"
        param="test"
        buttonBg="bg-saturatedBlue hover:bg-transparent"
      />
    );

    fireEvent.click(getByTestId(AnchorLinkTestId));

    expect(handleClick).toHaveBeenCalled();
  });
});
