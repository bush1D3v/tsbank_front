import { type ReactElement } from "react";
import { ArticleList } from "./components";

export default function FirstSection(): ReactElement {
  return (
    <section className="-mt-4 flex flex-col items-center text-lg">
      <h2 className="mb-8 md:mb-12 font-bold text-xl md:text-4xl lg:text-5xl">
        What is TSBank? 🤔
      </h2>
      <p className="px-2 md:px-4 lg:px-0 text-justify md:text-center md:text-3xl lg:text-4xl">
        TSBank is <u>not just a bank</u>; it's a financial companion meticulously crafted to
        <strong>redefine</strong> the way you experience banking. Imagine a world where managing your
        finances is not just a task, but an effortless and enjoyable part of your daily routine."
      </p>
      <ArticleList />
    </section>
  );
}
