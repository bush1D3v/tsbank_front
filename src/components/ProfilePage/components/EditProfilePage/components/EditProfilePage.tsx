import { type ReactElement } from "react";
import AnchorLink from "../../../../AnchorLink";
import { handleLinkClick } from "../../../../../functions";

export default function EditProfilePage(): ReactElement {
  const {
    VITE_REACT_APP_DELETE_USER,
    VITE_REACT_APP_UPDATE_PHONE,
    VITE_REACT_APP_UPDATE_EMAIL,
    VITE_REACT_APP_UPDATE_PASSWORD,
    VITE_REACT_APP_UPDATE_ALL
  } = import.meta.env;

  return (
    <ul className="flex max-w-fit h-[82dvh] flex-col items-center justify-center gap-10 md:gap-14 lg:gap-20 p-2">
      <li className="flex w-full">
        <AnchorLink
          func={handleLinkClick(VITE_REACT_APP_UPDATE_ALL)}
          param={VITE_REACT_APP_UPDATE_ALL}
          text="UPDATE ALL ACCOUNT INFO"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          func={handleLinkClick(VITE_REACT_APP_UPDATE_EMAIL)}
          param={VITE_REACT_APP_UPDATE_EMAIL}
          text="UPDATE YOUR EMAIL"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          func={handleLinkClick(VITE_REACT_APP_UPDATE_PASSWORD)}
          param={VITE_REACT_APP_UPDATE_PASSWORD}
          text="UPDATE YOUR PASSWORD"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          func={handleLinkClick(VITE_REACT_APP_UPDATE_PHONE)}
          param={VITE_REACT_APP_UPDATE_PHONE}
          text="UPDATE YOUR PHONE"
          buttonBg="bg-saturatedBlue hover:bg-transparent"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          func={handleLinkClick(VITE_REACT_APP_DELETE_USER)}
          param={VITE_REACT_APP_DELETE_USER}
          text="DELETE ACCOUNT"
          buttonBg="bg-blackBlue hover:bg-error"
        />
      </li>
    </ul>
  );
}
