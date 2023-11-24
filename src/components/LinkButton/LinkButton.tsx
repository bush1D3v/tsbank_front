import { type ReactElement } from "react";
import { handleLinkClick } from "../../functions";

interface LinkProps {
  to: string;
  text: string;
}

export default function LinkButton({ to, text }: LinkProps): ReactElement {
  return (
    <li
      onClick={handleLinkClick(to)}
      className="px-2 md:py-1 lg:px-3 xl:px-4 bg-blueBase hover:bg-transparent cursor-pointer rounded-xl
      border-white border-2 hover:scale-110 transition-all delay-75 ease-in-out">
      {text}
    </li>
  );
}
