import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import {
  describe,
  test,
  expect,
  beforeEach,
} from "vitest";
import TableRow from "./TableRow";

const labelData: string = "Email";
const valueData: string = "emailDeTeste@gmail.com";

const TableRowTestId: string = "TableRow";
const TableRowTableDataLabelTestId: string = "TableRowTableDataLabel";
const TableRowTableDataValueTestId: string = "TableRowTableDataValue";

describe("TableRow component tests", () => {
  beforeEach(() => {
    render(
      <TableRow
        label={labelData}
        value={valueData}
      />);
  });

  test("Should be able to render the component correctly", () => {
    expect(screen.getByTestId(TableRowTestId)).toBeInTheDocument();
  });

  test("Should be able to render the component with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TableRowTestId)).toHaveClass(
      "flex justify-between rounded-2xl border-2 border-lightGray px-2 gap-2"
    );
  });

  test("Should be able to render the TableRowLabel correctly", () => {
    expect(screen.getByTestId(TableRowTableDataLabelTestId)).toBeInTheDocument();
  });

  test("Should be able to render the TableRowLabel with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TableRowTableDataLabelTestId)).toHaveClass(
      "p-[2px] font-bold"
    );
  });

  test("Should be able to render the TableRowLabel with the correctly text", () => {
    expect(screen.getByTestId(TableRowTableDataLabelTestId)).toHaveTextContent(labelData);
  });

  test("Should be able to render the TableRowValue correctly", () => {
    expect(screen.getByTestId(TableRowTableDataValueTestId)).toBeInTheDocument();
  });

  test("Should be able to render the TableRowValue with the correctly tailwind classes", () => {
    expect(screen.getByTestId(TableRowTableDataValueTestId)).toHaveClass(
      "p-[2px]"
    );
  });

  test("Should be able to render the TableRowValue with the correctly text", () => {
    expect(screen.getByTestId(TableRowTableDataValueTestId)).toHaveTextContent(valueData);
  });
});
