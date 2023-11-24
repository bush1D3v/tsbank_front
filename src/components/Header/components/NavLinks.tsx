import { type ReactElement } from "react";
import { HOME, ABOUT } from "../../../utils";
import LinkButton from "../../LinkButton";

export default function NavLinks(): ReactElement {
  return (
    <nav>
      <ul className="flex gap-6 font-bold">
        <LinkButton to={HOME} text="HOME" />
        <LinkButton to={ABOUT} text="ABOUT" />
      </ul>
    </nav>
  );
}
