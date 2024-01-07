import { type ReactElement } from "react";
import AnchorLink from "../../../../AnchorLink";
import { handleLinkClick } from "../../../../../functions";
import {
  EDIT_ALL,
  EDIT_EMAIL,
  EDIT_PASSWORD,
  EDIT_PHONE,
  DELETE_USER
} from "../../../../../utils";

export default function EditProfilePage(): ReactElement {
  return (
    <ul className="flex max-w-fit h-[82dvh] flex-col items-center justify-center gap-10 md:gap-14 lg:gap-20 p-2">
      <li className="flex w-full">
        <AnchorLink
          func={handleLinkClick(EDIT_ALL)}
          param={EDIT_ALL}
          text="EDIT ALL ACCOUNT INFO"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          func={handleLinkClick(EDIT_EMAIL)}
          param={EDIT_EMAIL}
          text="CHANGE YOUR EMAIL"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          func={handleLinkClick(EDIT_PASSWORD)}
          param={EDIT_PASSWORD}
          text="CHANGE YOUR PASSOWRD"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          func={handleLinkClick(EDIT_PHONE)}
          param={EDIT_PHONE}
          text="CHANGE YOUR PHONE"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full">
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
