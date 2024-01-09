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
      className="bank h-100% cursor-pointer text-5xl md:text-7xl lg:text-6xl hover:text-darkBlue
      transition-all delay-75 relative">
      <CgProfile />
    </a>
  );
}
