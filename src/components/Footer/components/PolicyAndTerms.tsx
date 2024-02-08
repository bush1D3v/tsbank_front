import { ReactElement } from "react";

export default function PolicyAndTerms(): ReactElement {
  return (
    <ul className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]
    text-center md:flex gap-4"
      data-testid="PolicyAndTerms">
      <li>
        <a
          href="https://drive.google.com/file/d/1Mjdv1KKwJpRGx7gDOQ_X80mUAUpsSy7j/view?usp=sharing"
          className="underline lg:text-xl hover:text-darkBlue transition-all"
          rel="noreferrer noopener"
          target="_blank"
          data-testid="PolicyLink"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1YPhg5eVoAGnskfyPtwkGv9ch0qC7ZVyQ/view?usp=sharing"
          className="underline lg:text-xl hover:text-darkBlue transition-all"
          rel="noreferrer noopener"
          target="_blank"
          data-testid="TermsLink"
        >
          Terms of use
        </a>
      </li>
    </ul>
  );
}
