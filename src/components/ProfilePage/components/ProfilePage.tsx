import { type ReactElement } from "react";
import { handleLinkClick, logoutClick } from "@/functions";
import AnchorLink from "@/components/AnchorLink";
import Table from "./Table";
import { LOGIN, UPDATE } from "@/utils/routerPaths";

export default function ProfilePage(): ReactElement {
  return (
    <div
      className="flex justify-center items-center h-[82dvh] flex-col gap-10 md:gap-14 lg:gap-20 p-2"
      data-testid="ProfilePage"
    >
      <Table />
      <ul className="flex gap-8 w-full px-2" data-testid="ProfilePageList">
        <li className="flex w-full" data-testid="ProfilePageListItemEditProfile">
          <AnchorLink
            func={handleLinkClick(UPDATE)}
            param={UPDATE}
            text="EDIT PROFILE"
            buttonBg="bg-saturatedBlue hover:bg-transparent"
          />
        </li>
        <li className="flex w-full" data-testid="ProfilePageListItemLogout">
          <AnchorLink
            func={logoutClick(LOGIN)}
            param={LOGIN}
            text="LOGOUT"
            buttonBg="bg-blackBlue hover:bg-error"
          />
        </li>
      </ul>
    </div>
  );
}
