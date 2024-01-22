import { type ReactElement } from "react";
import { TableRow } from "./components";
import { jsonUserParser } from "../../../../functions";
import { CgProfile } from "react-icons/cg";

export default function Table(): ReactElement {
  const stringUserData = sessionStorage.getItem("userData");
  const jsonUserData = jsonUserParser(stringUserData);

  return (
    <table
      className="h-content flex w-full max-w-sm flex-col justify-center rounded-md border-2 border-lightGray p-2 md:scale-125 lg:scale-150"
      data-testid="Table"
    >
      <thead className="flex justify-center pb-6" data-testid="TableHead">
        <tr>
          <td>
            <CgProfile className="h-[10dvh] w-[10dvh]" data-testid="TableHeadIcon" />
          </td>
        </tr>
      </thead>
      <tbody className="flex flex-col gap-2">
        <TableRow label="Email:" value={jsonUserData.user.email} />
        <TableRow label="Phone:" value={jsonUserData.user.phone} />
        <TableRow label="Cpf:" value={jsonUserData.user.cpf} />
      </tbody>
    </table>
  );
}
