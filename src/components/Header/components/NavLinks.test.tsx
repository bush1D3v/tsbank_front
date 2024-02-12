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
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import NavLinks from "./NavLinks";
import { handleLinkClick } from "@/functions";

const {
  VITE_REACT_APP_HOME,
  VITE_REACT_APP_ABOUT
} = import.meta.env;

const NavLinksTestId: string = "NavLinks";
const NavLinksListTestId: string = "NavLinksList";
const NavLinksListItemHomeTestId: string = "NavLinksListItemHome";
const NavLinksListItemAboutTestId: string = "NavLinksListItemAbout";

const testHomeText: string = "HOME";
const testAboutText: string = "ABOUT";

vi.mock("@/functions", () => ({
  handleLinkClick: vi.fn(),
  eventClick: vi.fn()
}));

const router = createMemoryRouter(
  [ { path: "/", element: <NavLinks /> } ],
  { initialEntries: [ "/" ], }
);

describe("NavLinks component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(NavLinksTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly List", () => {
    expect(screen.getByTestId(NavLinksListTestId)).toBeInTheDocument();
  });

  test("Should be able to render the List component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(NavLinksListTestId)).toHaveClass(`
      flex gap-6 font-bold
    `);
  });

  test("Should be able to render the component with the correctly ListItemHome", () => {
    expect(screen.getByTestId(NavLinksListItemHomeTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemHome with the correctly tailwind classes", () => {
    expect(screen.getByTestId(NavLinksListItemHomeTestId)).toHaveClass(`
      flex
    `);
  });

  test("Should be able to fire event the ListItemHome", () => {
    fireEvent.click(screen.getByTestId(NavLinksListItemHomeTestId));

    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_HOME);
  });

  test("Should be able to render the ListItemHome with the correctly text", () => {
    expect(screen.getByTestId(NavLinksListItemHomeTestId)).toHaveTextContent(testHomeText);
  });

  test("Should be able to render the component with the correctly ListItemAbout", () => {
    expect(screen.getByTestId(NavLinksListItemAboutTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemAbout with the correctly tailwind classes", () => {
    expect(screen.getByTestId(NavLinksListItemAboutTestId)).toHaveClass(`
      flex
    `);
  });

  test("Should be able to fire event ListItemAbout", () => {
    fireEvent.click(screen.getByTestId(NavLinksListItemHomeTestId));

    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_ABOUT);
  });

  test("Should be able to render the ListItemAbout with the correctly text", () => {
    expect(screen.getByTestId(NavLinksListItemAboutTestId)).toHaveTextContent(testAboutText);
  });
});
