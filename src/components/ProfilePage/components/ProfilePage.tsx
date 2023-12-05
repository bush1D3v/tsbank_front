import { ReactElement } from "react";
import { CgProfile } from "react-icons/cg";
import { LOGIN, EDIT } from "../../../utils";
import { TableRow } from ".";
import {
  handleLinkClick,
  jsonUserParser,
  logoutClick
} from "../../../functions";
import AnchorLink from "../../AnchorLink";

export default function ProfilePage(): ReactElement {
  const stringUserData = localStorage.getItem("userInfo");

  const jsonUserData = jsonUserParser(stringUserData);

  return (
    <div className="flex justify-center items-center h-[82dvh] flex-col gap-10 md:gap-14 lg:gap-20 p-2">
      <table className="h-content flex w-full max-w-sm flex-col justify-center gap-2 rounded-md border-2 border-lightGray p-1 md:scale-110 lg:scale-125">
        <thead className="flex justify-center pb-6">
          <CgProfile className="h-[10dvh] w-[10dvh]" />
        </thead>
        <TableRow label="User:" value={jsonUserData.user.name} />
        <TableRow label="Balance:" value={jsonUserData.user.balance} />
        <TableRow label="Email:" value={jsonUserData.user.email} />
        <TableRow label="Phone:" value={jsonUserData.user.phone} />
        <TableRow label="Cpf:" value={jsonUserData.user.cpf} />
      </table>
      <ul className="flex gap-8 w-full px-2">
        <li className="flex w-full">
          <AnchorLink
            func={handleLinkClick(EDIT)}
            param={EDIT}
            text="EDIT PROFILE"
            buttonBg="bg-saturatedBlue hover:bg-transparent"
          />
        </li>
        <li className="flex w-full">
          <AnchorLink
            func={logoutClick(LOGIN)}
            param={LOGIN}
            text="LOGOUT"
            buttonBg="bg-primary hover:bg-error"
          />
        </li>
      </ul>
    </div>
  );
}
