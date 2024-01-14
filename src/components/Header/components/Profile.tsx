import { type ReactElement } from "react";
import { CgProfile } from "react-icons/cg";
import { handleLinkClick } from "../../../functions";

export default function Profile(): ReactElement {
  const {
    VITE_REACT_APP_PROFILE
  } = import.meta.env;

  return (
    <a
      onClick={handleLinkClick(VITE_REACT_APP_PROFILE)}
      className="cursor-pointer transition-all delay-75 relative h-full hover:opacity-50">
      <CgProfile className="h-full w-full" />
    </a>
  );
}
