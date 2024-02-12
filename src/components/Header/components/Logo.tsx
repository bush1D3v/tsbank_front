import { type ReactElement } from "react";
import { logo } from "@/assets/images";
import { handleLinkClick } from "@/functions";

export default function Logo(): ReactElement {
  const {
    VITE_REACT_APP_HOME
  } = import.meta.env;

  return (
    <a
      onClick={handleLinkClick(VITE_REACT_APP_HOME)}
      className="cursor-pointer transition-all delay-75 relative h-full hover:opacity-50"
      data-testid="Logo">
      <img src={logo} alt="tsbank logo" className="h-full w-full" data-testid="LogoImage" />
    </a>
  );
}
