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
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const ErrorPageTestId: string = "ErrorPage";
const ErrorPageLinkTestId: string = "ErrorPageLink";

const status: number = 404;

const router = createMemoryRouter(
  [ { path: "/", element: <ErrorPage error={{ status: status }} /> } ],
  { initialEntries: [ "/" ], }
);

describe("ErrorPage component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ErrorPageTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(ErrorPageTestId)).toHaveClass(`
      w-screen h-screen flex flex-col items-center justify-center gap-8 text-center animate-fade animate-duration-500 animate-ease-in-out
    `);
  });

  test("Should be able to render the component with the correctly error opcional parameter", () => {
    expect(screen.getByTestId(ErrorPageTestId)).toHaveTextContent(status.toString());
  });

  test("Should be able to redirect the user", () => {
    fireEvent.click(screen.getByTestId(ErrorPageLinkTestId));

    expect(screen.queryByTestId(ErrorPageTestId)).toBeNull();
  });
});
