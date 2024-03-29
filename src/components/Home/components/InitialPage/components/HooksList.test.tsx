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
} from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import HooksList from "./HooksList";
import {
  WITHDRAW,
  DEPOSIT,
  CARD,
  PIX,
  ROUTER_BASE_URL
} from "@/utils/routerPaths";

const HooksListTestId: string = "HooksList";
const HooksListItemWithdrawTestId: string = "HooksListItemWithdraw";
const HooksListItemDepositTestId: string = "HooksListItemDeposit";
const HooksListItemCardTestId: string = "HooksListItemCard";
const HooksListItemPixTestId: string = "HooksListItemPix";

const router = createMemoryRouter(
  [ { path: "/", element: <HooksList /> } ],
  { initialEntries: [ "/" ], }
);

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
    expect(screen.getByTestId(HooksListItemWithdrawTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${WITHDRAW}`
    );
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
    expect(screen.getByTestId(HooksListItemDepositTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${DEPOSIT}`
    );
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
    expect(screen.getByTestId(HooksListItemCardTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${CARD}`
    );
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
    expect(screen.getByTestId(HooksListItemPixTestId).firstChild).toHaveProperty(
      "href",
      `${ROUTER_BASE_URL}${PIX}`
    );
  });
});
