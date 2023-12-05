import { type ReactElement } from "react";
import { HOME, ABOUT } from "../../../utils";
import AnchorLink from "../../AnchorLink";
import { handleLinkClick } from "../../../functions";

export default function NavLinks(): ReactElement {
  return (
    <nav>
      <ul className="flex gap-6 font-bold">
        <li className="flex">
          <AnchorLink
            func={handleLinkClick(HOME)}
            param={HOME}
            text="HOME"
            buttonBg="bg-blueBase hover:bg-transparent"
          />
        </li>
        <li className="flex">
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
