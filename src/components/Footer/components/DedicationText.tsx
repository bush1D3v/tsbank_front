import { type ReactElement } from "react";

export default function DedicationText(): ReactElement {
  return (
    <p className="text-center lg:text-xl" data-testid="DedicationText">
      Made with 💖 <br /> by&nbsp;
      <a className="font-bold underline cursor-pointer hover:text-darkBlue transition-all"
        href="https://bushi-links.vercel.app/"
        rel="noreferrer noopener"
        target="_blank"
        data-testid="DedicationTextLink">
        bush1D3v
      </a>
    </p>
  );
}
