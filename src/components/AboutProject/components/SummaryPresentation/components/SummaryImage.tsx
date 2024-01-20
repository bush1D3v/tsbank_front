import { type ReactElement } from "react";

export default function SummaryImage(): ReactElement {
  return (
    <a className="w-2/4 md:w-2/6 lg:w-8/12 rounded-full hover:scale-105 cursor-pointer transition-all delay-75"
      href="https://github.com/bush1D3v"
      target="_blank"
      rel="noreferrer noopener"
      data-testid="SummaryImage"
    >
      <img className="rounded-full -mt-4"
        src="https://avatars.githubusercontent.com/u/133554156?v=4"
        alt="Victor photo"
        loading="lazy"
        data-testid="SummaryImageImage"
      />
    </a>
  );
}
