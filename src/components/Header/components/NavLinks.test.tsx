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
import NavLinks from "./NavLinks";
import { HOME, ABOUT, ROUTER_BASE_URL } from "@/utils/routerPaths";

const NavLinksTestId: string = "NavLinks";
const NavLinksListTestId: string = "NavLinksList";
const NavLinksListItemHomeTestId: string = "NavLinksListItemHome";
const NavLinksListItemAboutTestId: string = "NavLinksListItemAbout";

const testHomeText: string = "HOME";
const testAboutText: string = "ABOUT";

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
    expect(screen.getByTestId(NavLinksListItemHomeTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${HOME}`
    );
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
    fireEvent.click(screen.getByTestId(NavLinksListItemAboutTestId));
    expect(screen.getByTestId(NavLinksListItemAboutTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${ABOUT}`
    );
  });

  test("Should be able to render the ListItemAbout with the correctly text", () => {
    expect(screen.getByTestId(NavLinksListItemAboutTestId)).toHaveTextContent(testAboutText);
  });
});
