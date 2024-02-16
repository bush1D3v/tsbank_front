import { type ReactElement } from "react";
import { logo } from "@/assets/images";
import { handleLinkClick } from "@/functions";
import { HOME } from "@/utils/routerPaths";

export default function Logo(): ReactElement {
  return (
    <a
      onClick={handleLinkClick(HOME)}
      className="cursor-pointer transition-all delay-75 relative h-full hover:opacity-50"
      data-testid="Logo">
      <img src={logo} alt="tsbank logo" className="h-full w-full" data-testid="LogoImage" />
    </a>
  );
}
