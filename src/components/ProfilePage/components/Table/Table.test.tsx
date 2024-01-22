import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach
} from "vitest";
import Table from "./Table";
import { type UserData } from "../../../../types";

const emailData: string = "testAccount@gmail.com";
const phoneData: string = "21212121211";
const cpfData: string = "21212121536";

const TableTestId: string = "Table";
const TableHeadTestId: string = "TableHead";
const TableHeadIconTestId: string = "TableHeadIcon";
const TableRowTestId: string = "TableRow";

const userData: UserData = {
  "user": {
    "id": 75,
    "cpf": cpfData,
    "name": "Victor José Lopes Navarro",
    "email": emailData,
    "phone": phoneData,
    "balance": 0,
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzUsImlhdCI6MTcwNTg3NjUxNywiZXhwIjoxNzA1OTYyOTE3fQ.Ixaq8aiAQEKHYpAkpNXnw0WZebNAbU8_fIS1Z2pYEss"
};

sessionStorage.setItem("userData", JSON.stringify(userData));

describe("Table component tests", () => {
  beforeEach(() => {
    render(<Table />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(TableTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TableTestId)).toHaveClass(
      `h-content flex w-full max-w-sm flex-col justify-center rounded-md border-2
      border-lightGray p-2 md:scale-125 lg:scale-150`
    );
  });

  test("Should be able to render the TableHead correctly", () => {
    expect(screen.getByTestId(TableHeadTestId)).toBeInTheDocument();
  });

  test("Should be able to render the TableHead with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TableHeadTestId)).toHaveClass(
      "flex justify-center pb-6"
    );
  });

  test("Should be able to render the TableHeadIcon correctly", () => {
    expect(screen.getByTestId(TableHeadIconTestId)).toBeInTheDocument();
  });

  test("Should be able to render the TableHeadIcon with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TableHeadIconTestId)).toHaveClass(
      "h-[10dvh] w-[10dvh]"
    );
  });

  test("Should be able to render the TableRow correctly", () => {
    setTimeout(() => {
      expect(screen.getByTestId(TableRowTestId)).toBeInTheDocument();
    }, 2000);
  });

  test("Should be able to render the TableRowEmail with the correctly text", () => {
    setTimeout(() => {
      expect(screen.getByTestId(TableRowTestId)).toHaveTextContent(`Email: ${emailData}`);
    }, 2000);
  });

  test("Should be able to render the TableRowPhone with the correctly text", () => {
    setTimeout(() => {
      expect(screen.getByTestId(TableRowTestId)).toHaveTextContent(`Phone: ${phoneData}`);
    }, 2000);
  });

  test("Should be able to render the TableRowCpf with the correctly text", () => {
    setTimeout(() => {
      expect(screen.getByTestId(TableRowTestId)).toHaveTextContent(`Cpf: ${cpfData}`);
    }, 2000);
  });
});
