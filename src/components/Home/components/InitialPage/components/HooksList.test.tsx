import "@testing-library/jest-dom";
import {
  screen,
  render,
  fireEvent
} from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
  vi,
} from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { handleLinkClick } from "../../../../../functions";
import HooksList from "./HooksList";

const {
  VITE_REACT_APP_WITHDRAW,
  VITE_REACT_APP_DEPOSIT,
  VITE_REACT_APP_CARD,
  VITE_REACT_APP_PIX
} = import.meta.env;

const HooksListTestId: string = "HooksList";
const HooksListItemWithdrawTestId: string = "HooksListItemWithdraw";
const HooksListItemDepositTestId: string = "HooksListItemDeposit";
const HooksListItemCardTestId: string = "HooksListItemCard";
const HooksListItemPixTestId: string = "HooksListItemPix";

const router = createMemoryRouter(
  [ { path: "/", element: <HooksList /> } ],
  { initialEntries: [ "/" ], }
);

vi.mock("../../../../../functions", () => ({
  handleLinkClick: vi.fn(),
  eventClick: vi.fn()
}));

describe("HooksList component tests", () => {
  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(HooksListTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListTestId)).toHaveClass(
      "flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8 w-11/12 animate-fade-down animate-duration-700 animate-ease-in-out"
    );
  });

  test("Should be able to render the ListItemWithdraw correctly", () => {
    expect(screen.getByTestId(HooksListItemWithdrawTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemWithdraw with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListItemWithdrawTestId)).toHaveClass(
      "flex w-full"
    );
  });

  test("Should be able to render the ListItemWithdraw with the correctly text", () => {
    expect(screen.getByTestId(HooksListItemWithdrawTestId)).toHaveTextContent(
      "WITHDRAW"
    );
  });

  test("Should be able to fire event the ListItemWithdraw", () => {
    fireEvent.click(screen.getByTestId(HooksListItemWithdrawTestId));
    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_WITHDRAW);
  });

  test("Should be able to render the ListItemDeposit correctly", () => {
    expect(screen.getByTestId(HooksListItemDepositTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemDeposit with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListItemDepositTestId)).toHaveClass(
      "flex w-full"
    );
  });

  test("Should be able to render the ListItemDeposit with the correctly text", () => {
    expect(screen.getByTestId(HooksListItemDepositTestId)).toHaveTextContent(
      "DEPOSIT"
    );
  });

  test("Should be able to fire event the ListItemDeposit", () => {
    fireEvent.click(screen.getByTestId(HooksListItemDepositTestId));
    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_DEPOSIT);
  });

  test("Should be able to render the ListItemCard correctly", () => {
    expect(screen.getByTestId(HooksListItemCardTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemCard with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListItemCardTestId)).toHaveClass(
      "flex w-full"
    );
  });

  test("Should be able to render the ListItemCard with the correctly text", () => {
    expect(screen.getByTestId(HooksListItemCardTestId)).toHaveTextContent(
      "CARD"
    );
  });

  test("Should be able to fire event the ListItemCard", () => {
    fireEvent.click(screen.getByTestId(HooksListItemCardTestId));
    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_CARD);
  });

  test("Should be able to render the ListItemPix correctly", () => {
    expect(screen.getByTestId(HooksListItemPixTestId)).toBeInTheDocument();
  });

  test("Should be able to render the ListItemPix with the correctly tailwind classes", () => {
    expect(screen.getByTestId(HooksListItemPixTestId)).toHaveClass(
      "flex w-full"
    );
  });

  test("Should be able to render the ListItemPix with the correctly text", () => {
    expect(screen.getByTestId(HooksListItemPixTestId)).toHaveTextContent(
      "PIX"
    );
  });

  test("Should be able to fire event the ListItemPix", () => {
    fireEvent.click(screen.getByTestId(HooksListItemPixTestId));
    expect(handleLinkClick).toHaveBeenCalledWith(VITE_REACT_APP_PIX);
  });
});
