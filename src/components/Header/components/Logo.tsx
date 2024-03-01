import { type ReactElement } from "react";
import {
  smallLogo,
  mediumLogo,
  largeLogo
} from "@/assets/images";
import { HOME } from "@/utils/routerPaths";

export default function Logo(): ReactElement {
  return (
    <a
      className="cursor-pointer transition-all h-full delay-75 relative hover:opacity-50"
      data-testid="Logo"
      href={HOME}>
      <img srcSet={`${smallLogo} 480w, ${mediumLogo} 768w, ${largeLogo} 1080w`}
        alt="tsbank logo" width={"100%"} height={"100%"} className="h-full w-full" data-testid="LogoImage" />
    </a>
  );
}
