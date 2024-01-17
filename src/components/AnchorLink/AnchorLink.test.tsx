import "@testing-library/jest-dom";
import AnchorLink from "./AnchorLink";
import { render } from "@testing-library/react";
import {
  describe,
  expect,
  test
} from "vitest";

describe("AnchorLink Component Tests", () => {
  test("Should render", () => {
    const { getByText } = render(
      <AnchorLink
        func={() => { }}
        text="test" param="test"
        buttonBg="bg-saturatedBlue hover:bg-transparent" />
    );
    expect(getByText("test")).toBeInTheDocument();
  });
});
