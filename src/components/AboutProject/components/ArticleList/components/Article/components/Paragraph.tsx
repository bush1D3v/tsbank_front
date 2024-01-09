import { type ReactElement } from "react";

interface ParagraphProps {
  text: string;
}

export default function Paragraph({ text }: ParagraphProps): ReactElement {
  return <p
    className="px-2 md:px-4 lg:px-0 text-justify md:text-center md:text-3xl lg:text-4xl" dangerouslySetInnerHTML={{ __html: text }}
  />;
}
