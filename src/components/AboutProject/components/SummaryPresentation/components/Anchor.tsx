import { type ReactElement } from "react";

interface AnchorProps {
  text: string;
  link: string;
}

export default function Anchor({ text, link }: AnchorProps): ReactElement {
  return <a
    href={link}
    className="underline hover:text-darkBlue transition-all"
    target="_blank"
    rel="noreferrer noopener"
    data-testid="Anchor">
    {text}
  </a>;
}
