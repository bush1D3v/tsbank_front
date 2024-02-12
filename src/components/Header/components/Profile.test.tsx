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
import { handleLinkClick } from "@/functions";
import Profile from "./Profile";

const {
  VITE_REACT_APP_PROFILE
} = import.meta.env;

const ProfileTestId: string = "Profile";
const ProfileIconTestId: string = "ProfileIcon";

vi.mock("@/functions", () => ({
  handleLinkClick: vi.fn(),
}));

const router = createMemoryRouter(
  [ { path: "/", element: <Profile /> } ],
  { initialEntries: [ "/" ], }
);

describe("Profile component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ProfileTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ProfileTestId)).toHaveClass(`
      cursor-pointer transition-all delay-75 relative h-full hover:opacity-50
    `);
  });

  test("Should be able to fire event", () => {
    fireEvent.click(screen.getByTestId(ProfileTestId));

    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_PROFILE);
  });

  test("Should be able to render the component with the correctly Icon", () => {
    expect(screen.getByTestId(ProfileIconTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Icon component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ProfileIconTestId)).toHaveClass("h-full w-full");
  });
});
