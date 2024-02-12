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
  vi,
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { createHash } from "@/functions";
import { type HistoryData } from "../../../functions";
import HistoryList from "./HistoryList";

const idData: number = 1;
const descriptionData: string = "deposit";
const dateData: string = "2024/01/08 21:57:59";

const historyData: HistoryData[] = [
  {
    "id": idData,
    "description": descriptionData,
    "value": 1500,
    "date": dateData,
    "user_id": 75,
    "type": "input",
  }
];

const testHash: string = "testHash";

vi.mock("@/functions", () => ({
  createHash: vi.fn(() => {
    return testHash;
  }),
}));

const router = createMemoryRouter(
  [ { path: "/home", element: <HistoryList historyData={historyData} /> } ],
  { initialEntries: [ "/home" ], }
);

const HistoryListTestId: string = "HistoryList";
const HistoryListItemTestId: string = "HistoryListItem";
const HistoryListArrowSpanTestId: string = "HistoryListArrowSpan";

describe("HistoryList component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(HistoryListTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HistoryListTestId)).toHaveClass(
      "py-1 pl-[18px] pr-1 flex flex-col gap-4 md:gap-6 lg:gap-4 w-full max-h-[18dvh] md:max-h-[19dvh] overflow-y-scroll lg:w-3/5 xl:w-2/4 animate-fade-down animate-duration-500 animate-ease-in-out"
    );
  });

  test("Should be able to render the ArrowSpan correctly", () => {
    expect(screen.getByTestId(HistoryListArrowSpanTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ArrowSpan with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HistoryListArrowSpanTestId)).toHaveClass(
      "pr-2 right-0 text-whiteBlue text-lg md:text-xl group-hover:text-desaturatedBlue transition-all delay-75 ease-in-out"
    );
  });

  test("Should be able to render the ArrowSpan with the correctly text", () => {
    expect(screen.getByTestId(HistoryListArrowSpanTestId)).toHaveTextContent(
      ">"
    );
  });

  test("Should be able to render the ListItem correctly", () => {
    expect(screen.getByTestId(HistoryListItemTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItem with the correctly description", () => {
    expect(screen.getByTestId(HistoryListItemTestId)).toHaveTextContent(
      descriptionData
    );
  });

  test("Should be able to render the HistoryListItem with the correctly date", () => {
    expect(screen.getByTestId(HistoryListItemTestId)).toHaveTextContent(
      dateData
    );
  });

  test("Should be able to fire event the ListItem with the correctly parameter", () => {
    fireEvent.click(screen.getByTestId(HistoryListItemTestId));

    expect(createHash).toHaveBeenCalledWith(idData.toString());
  });
});
