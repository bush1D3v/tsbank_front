import { ReactElement } from "react";
import { CgProfile } from "react-icons/cg";
import { TableRow } from ".";
import {
  handleLinkClick,
  jsonUserParser,
  logoutClick
} from "../../../functions";
import AnchorLink from "../../AnchorLink";

export default function ProfilePage(): ReactElement {
  const stringUserData = sessionStorage.getItem("userInfo");

  const jsonUserData = jsonUserParser(stringUserData);

  const {
    VITE_REACT_APP_LOGIN,
    VITE_REACT_APP_UPDATE
  } = import.meta.env;

  return (
    <div className="flex justify-center items-center h-[82dvh] flex-col gap-10 md:gap-14 lg:gap-20 p-2">
      <table className="h-content flex w-full max-w-sm flex-col justify-center gap-2 rounded-md border-2 border-lightGray p-2 md:scale-125 lg:scale-150">
        <thead className="flex justify-center pb-6">
          <CgProfile className="h-[10dvh] w-[10dvh]" />
        </thead>
        <TableRow label="Email:" value={jsonUserData.user.email} />
        <TableRow label="Phone:" value={jsonUserData.user.phone} />
        <TableRow label="Cpf:" value={jsonUserData.user.cpf} />
      </table>
      <ul className="flex gap-8 w-full px-2">
        <li className="flex w-full">
          <AnchorLink
            func={handleLinkClick(VITE_REACT_APP_UPDATE)}
            param={VITE_REACT_APP_UPDATE}
            text="EDIT PROFILE"
            buttonBg="bg-saturatedBlue hover:bg-transparent"
          />
        </li>
        <li className="flex w-full">
          <AnchorLink
            func={logoutClick(VITE_REACT_APP_LOGIN)}
            param={VITE_REACT_APP_LOGIN}
            text="LOGOUT"
            buttonBg="bg-blackBlue hover:bg-error"
          />
        </li>
      </ul>
    </div>
  );
}
