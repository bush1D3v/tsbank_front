import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Layout from "./Layout";
import AboutProject from "../AboutProject";

const LayoutTestId: string = "Layout";
const HeaderTestId: string = "Header";
const FooterTestId: string = "Footer";
const AboutProjectTestId: string = "AboutProject";

const router = createMemoryRouter(
  [ {
    path: "/", element:
      <Layout>
        <AboutProject />
      </Layout>
  } ],
  { initialEntries: [ "/" ], }
);

describe("Layout component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(LayoutTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with Header component", () => {
    expect(screen.getByTestId(HeaderTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with Footer component", () => {
    expect(screen.getByTestId(FooterTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with AboutProject component", () => {
    expect(screen.getByTestId(AboutProjectTestId)).toBeInTheDocument();
  });
});
