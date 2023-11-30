import tsbankLogo from "../../assets/images/tsbank-no-bg.png";
import { type ReactElement } from "react";

export default function Hero(): ReactElement {
  return (
    <section className="flex flex-col items-center gap-14 justify-center">
      <a href="https://github.com/bush1D3v/tsbank_api" target="_blank" className="flex content-center w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%]">
        <img src={tsbankLogo} alt="Tsbank logo" />
      </a>
      <p className="font-bold text-2xl text-justify md:text-center px-2 md:px-4 xl:px-50">
        Hello! We are happy that you are curious to learn about the TSBank project! 😄 <br />
        Although your first page is not created yet, feel free to click on the image, you will be redirected to our server repository! 🌐
      </p>
    </section>
  );
}
