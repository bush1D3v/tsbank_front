import { type ReactElement } from "react";
import { Paragraph } from "./components";

interface ArticleProps {
  text: string;
  image: string;
  imageAlt: string;
  rowDirection: "lg:flex-row" | "lg:flex-row-reverse";
}

export default function Article({
  text,
  image,
  imageAlt,
  rowDirection
}: ArticleProps): ReactElement {
  const className: string = `flex items-center gap-4 flex-col ${rowDirection}`;

  return (
    <article className={className}>
      <img src={image} alt={imageAlt} loading="lazy" />
      <Paragraph
        text={text} />
    </article>
  );
}
