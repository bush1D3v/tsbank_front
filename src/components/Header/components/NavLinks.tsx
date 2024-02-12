import { type ReactElement } from "react";
import AnchorLink from "@/components/AnchorLink";
import { handleLinkClick } from "@/functions";

export default function NavLinks(): ReactElement {
  const {
    VITE_REACT_APP_HOME,
    VITE_REACT_APP_ABOUT
  } = import.meta.env;

  return (
    <nav data-testid="NavLinks">
      <ul className="flex gap-6 font-bold" data-testid="NavLinksList">
        <li className="flex" data-testid="NavLinksListItemHome">
          <AnchorLink
            func={handleLinkClick(VITE_REACT_APP_HOME)}
            param={VITE_REACT_APP_HOME}
            text="HOME"
            buttonBg="bg-blueBase hover:bg-transparent"
          />
        </li>
        <li className="flex" data-testid="NavLinksListItemAbout">
          <AnchorLink
            func={handleLinkClick(VITE_REACT_APP_ABOUT)}
            param={VITE_REACT_APP_ABOUT}
            text="ABOUT"
            buttonBg="bg-blueBase hover:bg-transparent"
          />
        </li>
      </ul>
    </nav>
  );
}
