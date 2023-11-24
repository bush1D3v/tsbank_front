import { type ReactElement } from "react";

export function Footer(): ReactElement {
  return (
    <footer className="bg-saturedBlue flex h-[8vh] justify-center items-center">
      <span className="text-text">
        Feito com 💖 por <a
          className="font-bold underline cursor-pointer hover:text-darkBlue transition-all"
          href="https://linktr.ee/bush1D3v"
        >
          bush1D3v
        </a>
      </span>
    </footer>
  );
}
