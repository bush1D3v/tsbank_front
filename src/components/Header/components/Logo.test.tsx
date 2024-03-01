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
  beforeEach,
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import {
  largeLogo,
  mediumLogo,
  smallLogo
} from "@/assets/images";
import Logo from "./Logo";

const LogoTestId: string = "Logo";
const LogoImageTestId: string = "LogoImage";

const router = createMemoryRouter(
  [ { path: "/", element: <Logo /> } ],
  { initialEntries: [ "/" ], }
);

describe("Logo component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(LogoTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(LogoTestId)).toHaveClass(`
      cursor-pointer transition-all delay-75 relative h-full hover:opacity-50
    `);
  });

  test("Should be able to render the Image with the correctly parameters", () => {
    expect(screen.getByTestId(LogoImageTestId)).toHaveAttribute(
      "srcSet",
      `${smallLogo} 480w, ${mediumLogo} 768w, ${largeLogo} 1080w`
    );
    expect(screen.getByTestId(LogoImageTestId)).toHaveAttribute("alt", "tsbank logo");
  });

  test("Should be able to render the Image component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(LogoImageTestId)).toHaveClass("h-full w-full");
  });

  test("Should be able to fire event", () => {
    fireEvent.click(screen.getByTestId(LogoTestId));
  });
});
