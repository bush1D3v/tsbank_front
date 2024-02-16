import {
  DELETE_USER,
  UPDATE_PHONE,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_ALL
} from "@/utils/routerPaths";
import { type ReactElement } from "react";
import AnchorLink from "@/components/AnchorLink";
import { handleLinkClick } from "@/functions";

export default function EditProfilePage(): ReactElement {
  return (
    <ul
      className="flex max-w-fit h-[82dvh] flex-col items-center justify-center gap-10 md:gap-14 lg:gap-20 p-2"
      data-testid="EditProfilePage"
    >
      <li className="flex w-full" data-testid="EditProfilePageListItemUpdateAll">
        <AnchorLink
          func={handleLinkClick(UPDATE_ALL)}
          param={UPDATE_ALL}
          text="UPDATE ALL ACCOUNT INFO"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full" data-testid="EditProfilePageListItemUpdateEmail">
        <AnchorLink
          func={handleLinkClick(UPDATE_EMAIL)}
          param={UPDATE_EMAIL}
          text="UPDATE YOUR EMAIL"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full" data-testid="EditProfilePageListItemUpdatePassword">
        <AnchorLink
          func={handleLinkClick(UPDATE_PASSWORD)}
          param={UPDATE_PASSWORD}
          text="UPDATE YOUR PASSWORD"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full" data-testid="EditProfilePageListItemUpdatePhone">
        <AnchorLink
          func={handleLinkClick(UPDATE_PHONE)}
          param={UPDATE_PHONE}
          text="UPDATE YOUR PHONE"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full" data-testid="EditProfilePageListItemDeleteUser">
        <AnchorLink
          func={handleLinkClick(DELETE_USER)}
          param={DELETE_USER}
          text="DELETE ACCOUNT"
          buttonBg="bg-blackBlue hover:bg-error"
        />
      </li>
    </ul>
  );
}
