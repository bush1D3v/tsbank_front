import { type ReactElement } from "react";
import { eventClick } from "../../functions";

interface AnchorLinkProps {
  func: (param: string) => void;
  text: string;
  param: string;
  buttonBg: string;
}

export default function AnchorLink({ func, text, param, buttonBg }: AnchorLinkProps): ReactElement {
  const className =
    `px-3 md:py-1 lg:px-3 xl:px-4 ${buttonBg} border-white cursor-pointer rounded-xl border-2 font-bold
    hover:scale-110 transition-all delay-75 ease-in-out w-full text-center flex justify-center items-center`;

  return (
    <a
      onClick={eventClick({ func, param })}
      className={className}
    >
      {text}
    </a >
  );
}
