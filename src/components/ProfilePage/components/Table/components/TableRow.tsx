import { type ReactElement } from "react";

interface TableRowProps {
  label: string;
  value: string | number;
}

export default function TableRow({ label, value }: TableRowProps): ReactElement {
  return (
    <tr
      className="flex justify-between rounded-2xl border-2 border-lightGray px-2 gap-2"
      data-testid="TableRow"
    >
      <td className="p-[2px] font-bold" data-testid="TableRowTableDataLabel">
        {label}
      </td>
      <td className="p-[2px]" data-testid="TableRowTableDataValue">
        {value}
      </td>
    </tr>
  );
}
