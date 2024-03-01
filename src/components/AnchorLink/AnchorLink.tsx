import { type ReactElement } from "react";

type AnchorLinkProps = {
  text: string;
  param: string;
  buttonBg: `bg-${string} hover:bg-${string}`;
}

export default function AnchorLink({ text, param, buttonBg }: AnchorLinkProps): ReactElement {
  const className =
    `px-3 md:py-1 lg:px-3 xl:px-4 ${buttonBg} border-white cursor-pointer rounded-xl border-2 font-bold
    hover:scale-110 transition-all delay-75 ease-in-out w-full text-center flex justify-center items-center`;

  return (
    <a
      className={className}
      data-testid="AnchorLink"
      href={param}>
      {text}
    </a >
  );
}
