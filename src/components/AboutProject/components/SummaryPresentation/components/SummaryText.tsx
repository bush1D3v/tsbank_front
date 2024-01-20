import { type ReactElement } from "react";
import Anchor from "./Anchor";

export default function SummaryText(): ReactElement {
  return (
    <p className="px-2 md:px-4 lg:px-0 text-justify md:text-center md:text-3xl lg:text-4xl"
      data-testid="SummaryText">
      My name is Victor Navarro, and I have been a software developer since 2023. I am a software engineering student at college <Anchor
        text="Cruzeiro do Sul"
        link="https://www.cruzeirodosulvirtual.com.br/"
      />
      , and I work as a back-end developer at <Anchor
        text=" Nasajon"
        link="https://nasajon.com.br/"
      />
      .
    </p>
  );
}
