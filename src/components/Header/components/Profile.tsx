import { type ReactElement } from "react";
import { CgProfile } from "react-icons/cg";
import { PROFILE } from "../../../utils";
import { handleLinkClick } from "../../../functions";

export default function Profile(): ReactElement {
  return (
    <a
      onClick={handleLinkClick(PROFILE)}
      className="bank h-100% cursor-pointer text-5xl md:text-7xl lg:text-6xl hover:text-darkBlue
      transition-all delay-75 relative">
      <CgProfile />
    </a>
  );
}
