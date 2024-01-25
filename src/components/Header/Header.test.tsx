import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Header from "./Header";

const HeaderTestId: string = "Header";
const HeaderLogoTestId: string = "Logo";
const HeaderNavLinksTestId: string = "NavLinks";
const HeaderProfileTestId: string = "Profile";

const router = createMemoryRouter(
  [ { path: "/", element: <Header /> } ],
  { initialEntries: [ "/" ], }
);

describe("Header component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(HeaderTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HeaderTestId)).toHaveClass(`
      bg-saturatedBlue flex h-[9dvh] items-center justify-between py-2 px-4
      animate-fade-down animate-duration-500 animate-ease-in-out
    `);
  });

  test("Should be able to render the component with the correctly Logo", () => {
    expect(screen.getByTestId(HeaderLogoTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly NavLinks", () => {
    expect(screen.getByTestId(HeaderNavLinksTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly Profile", () => {
    expect(screen.getByTestId(HeaderProfileTestId)).toBeInTheDocument();
  });
});
