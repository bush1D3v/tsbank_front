import { type ReactElement } from "react";
import { BsBank } from "react-icons/bs";
import { HOME } from "../../../utils";
import { handleLinkClick } from "../../../functions";

export default function Logo(): ReactElement {
  return (
    <a
      onClick={handleLinkClick(HOME)}
      className="bank h-100% cursor-pointer text-5xl md:text-7xl lg:text-6xl hover:text-darkBlue
      transition-all delay-75 relative">
      <BsBank />
    </a>
  );
}
