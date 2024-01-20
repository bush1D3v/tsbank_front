import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import ArticleList from "./ArticleList";

const ArticleListTestId: string = "ArticleList";
const ArticleTestId: string = "Article";

describe("ArticleList component tests", () => {
  beforeEach(() => {
    render(<ArticleList />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(ArticleListTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Article component 3 times", () => {
    expect(screen.getAllByTestId(ArticleTestId)).toHaveLength(3);
  });
});
