import tsbankLogo from "../../assets/images/tsbank-no-bg.svg";
import { type ReactElement } from "react";

export default function Hero(): ReactElement {
  return (
    <section className="flex flex-col items-center gap-14 justify-center">
      <a href="https://github.com/bush1D3v/tsbank_api" target="_blank" className="flex content-center w-[60%]">
        <img src={tsbankLogo} alt="Tsbank logo" />
      </a>
      <p className="font-bold text-2xl text-justify md:text-center px-2 md:px-4 xl:px-80">
        Olá! Ficamos felizes que você esteja curioso para conhecer o projeto TSBank! 😄 <br />
        Enquanto a sua primeira página ainda não é criada, sinta-se a vontade para clicar na imagem, você será redirecionado ao repositório do nosso servidor! 🌐
      </p>
    </section>
  );
}
