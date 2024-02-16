import { type ReactElement } from "react";
import AnchorLink from "@/components/AnchorLink";
import { handleLinkClick } from "@/functions";
import { HOME, ABOUT } from "@/utils/routerPaths";

export default function NavLinks(): ReactElement {
  return (
    <nav data-testid="NavLinks">
      <ul className="flex gap-6 font-bold" data-testid="NavLinksList">
        <li className="flex" data-testid="NavLinksListItemHome">
          <AnchorLink
            func={handleLinkClick(HOME)}
            param={HOME}
            text="HOME"
            buttonBg="bg-blueBase hover:bg-transparent"
          />
        </li>
        <li className="flex" data-testid="NavLinksListItemAbout">
          <AnchorLink
            func={handleLinkClick(ABOUT)}
            param={ABOUT}
            text="ABOUT"
            buttonBg="bg-blueBase hover:bg-transparent"
          />
        </li>
      </ul>
    </nav>
  );
}
