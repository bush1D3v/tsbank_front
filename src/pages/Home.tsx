import { type ReactElement } from "react";

import { Hero } from "../components";

export default function Home(): ReactElement {
  return (
    <main className="h-[82dvh] justify-center flex flex-col m-auto">
      <Hero />
    </main>
  );
}
