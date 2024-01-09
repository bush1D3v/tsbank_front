import { type ReactElement } from "react";
import { BsBank } from "react-icons/bs";
import { handleLinkClick } from "../../../functions";

export default function Logo(): ReactElement {
  const {
    VITE_REACT_APP_HOME
  } = import.meta.env;

  return (
    <a
      onClick={handleLinkClick(VITE_REACT_APP_HOME)}
      className="bank h-100% cursor-pointer text-5xl md:text-7xl lg:text-6xl hover:text-darkBlue
      transition-all delay-75 relative">
      <BsBank />
    </a>
  );
}
