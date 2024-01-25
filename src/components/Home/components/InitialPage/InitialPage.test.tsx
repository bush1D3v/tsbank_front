import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
} from "vitest";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { type UserData } from "../../../../types";
import { type HistoryResponseProps } from "../functions";
import { type detailUserResponseProps } from "./functions";
import InitialPage from "./InitialPage";

const cpfData: string = "21212121536";
const nameData: string = "Victor José Lopes Navarro";
const emailData: string = "testAccount@gmail.com";
const phoneData: string = "21212121211";
const balanceData: number = 2500;

const userData: UserData = {
  "user": {
    "id": 75,
    "cpf": cpfData,
    "name": nameData,
    "email": emailData,
    "phone": phoneData,
    "balance": balanceData,
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsImlhdCI6MTcwNTg3NjUxNywiZXhwIjoxNzA1OTYyOTE3fQ.Ixaq8aiAQEKHYpAkpNXnw0WZebNAbU8_fIS1Z2pYEss"
};

const descriptionData: string = "deposit";
const valueData: number = 1500;
const idData: number = 1;
const dateData: string = "2024/01/08 21:57:59";

const detailUserData: detailUserResponseProps = {
  "success": true,
  "message": "User detailed successfully.",
  user: userData.user
};

const historyData: HistoryResponseProps = {
  "success": true,
  "message": [
    {
      "id": idData,
      "description": descriptionData,
      "value": valueData,
      "date": dateData,
      "user_id": 75,
      "type": "input",
    }
  ]
};

vi.mock("./functions", () => ({
  detailUserSubmit: vi.fn(() => {
    return detailUserData;
  })
}));

vi.mock("../functions", () => ({
  getHistory: vi.fn(() => {
    return historyData;
  })
}));

const formattedBalance: string = "$2.500,00";

vi.mock("../../../../functions", () => ({
  handleLinkClick: vi.fn(),
  eventClick: vi.fn(),
  balanceFormat: vi.fn(() => {
    return formattedBalance;
  }),
  balanceStringify: vi.fn(),
  jsonUserParser: vi.fn(() => {
    return userData;
  })
}));

const router = createMemoryRouter(
  [ { path: "/home", element: <InitialPage /> } ],
  { initialEntries: [ "/home" ], }
);

sessionStorage.setItem("userData", JSON.stringify(userData.user));
sessionStorage.setItem("historyData", JSON.stringify(historyData.message));

const HistoryListTestId: string = "HistoryList";
const BalanceDivisionTestId: string = "BalanceDivision";
const HooksListTestId: string = "HooksList";
const InitialPageTestId: string = "InitialPage";
const InitialPageTitleTestId: string = "InitialPageTitle";
const InitialPageHistorySpanTestId: string = "InitialPageHistorySpan";

describe("InitialPage component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(InitialPageTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(InitialPageTestId)).toHaveClass(
      "flex flex-col items-center justify-center gap-8 md:gap-14 lg:w-7/12"
    );
  });

  test("Should be able to render the Title correctly", () => {
    expect(screen.getByTestId(InitialPageTitleTestId)).toBeInTheDocument();
  });

  test("Should be able to render the Title with the correctly text", () => {
    expect(screen.getByTestId(InitialPageTitleTestId)).toHaveTextContent(
      `Hello ${nameData}👋`
    );
  });

  test("Should be able to render the Title with the correctly tailwind classes", () => {
    expect(screen.getByTestId(InitialPageTitleTestId)).toHaveClass(
      "text-xl md:text-2xl lg:text-3l xl:text-4xl font-bold text-center animate-fade-down animate-duration-700 animate-ease-in-out"
    );
  });

  test("Should be able to render the BalanceDivision correctly", () => {
    expect(screen.getByTestId(BalanceDivisionTestId)).toBeInTheDocument();
  });

  test("Should be able to render the BalanceDivision with the correctly value", () => {
    expect(screen.getByTestId(BalanceDivisionTestId)).toHaveTextContent(
      formattedBalance
    );
  });

  test("Should be able to render the HooksList correctly", () => {
    expect(screen.getByTestId(HooksListTestId)).toBeInTheDocument();
  });

  test("Should be able to render the HistorySpan correctly", () => {
    expect(screen.getByTestId(InitialPageHistorySpanTestId)).toBeInTheDocument();
  });

  test("Should be able to render the HistorySpan with the correctly tailwind classes", () => {
    expect(screen.getByTestId(InitialPageHistorySpanTestId)).toHaveClass(
      "md:-mt-8 -mb-6 md:-mb-12 text-lg md:text-xl lg:text-2xl font-bold animate-fade animate-duration-700 animate-ease-in-out"
    );
  });

  test("Should be able to render the HistorySpan with the correctly text", () => {
    expect(screen.getByTestId(InitialPageHistorySpanTestId)).toHaveTextContent(
      "▼ HISTORY ▼"
    );
  });

  test("Should be able to render the HistoryList correctly", () => {
    expect(screen.getByTestId(HistoryListTestId)).toBeInTheDocument();
  });
});
