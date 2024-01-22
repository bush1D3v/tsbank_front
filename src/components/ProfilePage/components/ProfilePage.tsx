import { type ReactElement } from "react";
import { handleLinkClick, logoutClick } from "../../../functions";
import AnchorLink from "../../AnchorLink";
import Table from "./Table";

export default function ProfilePage(): ReactElement {
  const {
    VITE_REACT_APP_LOGIN,
    VITE_REACT_APP_UPDATE
  } = import.meta.env;

  return (
    <div
      className="flex justify-center items-center h-[82dvh] flex-col gap-10 md:gap-14 lg:gap-20 p-2"
      data-testid="ProfilePage"
    >
      <Table />
      <ul className="flex gap-8 w-full px-2" data-testid="ProfilePageList">
        <li className="flex w-full" data-testid="ProfilePageListItemEditProfile">
          <AnchorLink
            func={handleLinkClick(VITE_REACT_APP_UPDATE)}
            param={VITE_REACT_APP_UPDATE}
            text="EDIT PROFILE"
            buttonBg="bg-saturatedBlue hover:bg-transparent"
          />
        </li>
        <li className="flex w-full" data-testid="ProfilePageListItemLogout">
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
