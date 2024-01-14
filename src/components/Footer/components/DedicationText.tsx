import { type ReactElement } from "react";

export default function DedicationText(): ReactElement {
  return (
    <p className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] text-center lg:text-xl">
      Made with 💖 <br /> by&nbsp;
      <a className="font-bold underline cursor-pointer hover:text-darkBlue transition-all"
        href="https://bushi-links.vercel.app/"
        rel="noreferrer"
        target="_blank">
        bush1D3v
      </a>
    </p>
  );
}
