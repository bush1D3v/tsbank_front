import { type ReactElement } from "react";
import { SummaryImage, SummaryText } from "./components";

export default function SummaryPresentation(): ReactElement {
  return (
    <article className="flex flex-col items-center gap-4 lg:flex-row" data-testid="SummaryPresentation">
      <SummaryImage />
      <SummaryText />
    </article>
  );
}
