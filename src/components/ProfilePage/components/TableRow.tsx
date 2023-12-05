import { type ReactElement } from "react";

interface TableRowProps {
  label: string;
  value: string | number;
}

export default function TableRow({ label, value }: TableRowProps): ReactElement {
  return (
    <tr className="flex justify-between rounded-2xl border-2 border-lightGray px-2 gap-2">
      <td className="p-[2px] font-bold">
        {label}
      </td>
      <td className="p-[2px]">
        {value}
      </td>
    </tr>
  );
}
