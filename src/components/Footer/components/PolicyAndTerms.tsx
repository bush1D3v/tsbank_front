import { ReactElement } from "react";

export default function PolicyAndTerms(): ReactElement {
  return (
    <ul className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
    text-center md:flex gap-4 md:gap-6 lg:gap-8 flex"
      data-testid="PolicyAndTerms">
      <li>
        <a
          href="https://drive.google.com/file/d/1Mjdv1KKwJpRGx7gDOQ_X80mUAUpsSy7j/view?usp=sharing"
          className="underline text-[18px] md:text-2xl lg:text-3xl hover:text-darkBlue transition-all"
          rel="noreferrer noopener"
          target="_blank"
          data-testid="PolicyLink"
        >
          Policy
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1YPhg5eVoAGnskfyPtwkGv9ch0qC7ZVyQ/view?usp=sharing"
          className="underline text-[18px] md:text-2xl lg:text-3xl hover:text-darkBlue transition-all"
          rel="noreferrer noopener"
          target="_blank"
          data-testid="TermsLink"
        >
          Terms
        </a>
      </li>
    </ul>
  );
}
