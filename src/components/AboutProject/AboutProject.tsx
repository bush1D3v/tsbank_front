import { lpWelcome } from "../../assets/images";
import { Anchor, ArticleList } from "./components";
import { ReactElement, useState } from "react";

export default function AboutProject(): ReactElement {
  const [ isImageLoaded, setIsImageLoaded ] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <main className="min-h-[82dvh] flex flex-col gap-4 text-center">
      <div className="my-6 flex flex-col gap-4 items-center max-w-7xl m-auto">
        <article className="lg:flex lg:items-center lg:w-full lg:justify-around">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl">Welcome to <br /> TSBank! 🏦💵</h1>
          <img src={lpWelcome} alt="Welcome Image" loading="eager" onLoad={handleImageLoad} />
          {isImageLoaded ? null : <p className="w-[500px] h-[500px]">Carregando imagem...</p>}
        </article>
        <section className="-mt-4 flex flex-col items-center text-lg">
          <h2 className="mb-8 md:mb-12 font-bold text-xl md:text-4xl lg:text-5xl">What is TSBank? 🤔</h2>
          <p className="px-2 md:px-4 lg:px-0 text-justify md:text-center md:text-3xl lg:text-4xl">
            TSBank is <u>not just a bank</u>; it's a financial companion meticulously crafted to
            <strong>redefine</strong> the way you experience banking. Imagine a world where managing your
            finances is not just a task, but an effortless and enjoyable part of your daily routine."
          </p>
          <ArticleList />
        </section>
        <hr className="p-[1px] bg-saturedBlue border-white border-2 w-10/12 rounded-2xl" />
        <section className="flex flex-col items-center gap-4 text-lg">
          <h2 className="mb-4 lg:mt-4 font-bold text-xl md:text-4xl lg:text-5xl">Who developed it? 👨‍💻</h2>
          <article className="flex flex-col items-center gap-4 lg:flex-row">
            <a
              className="w-2/4 md:w-2/6 lg:w-8/12 rounded-full hover:scale-105 cursor-pointer transition-all delay-75"
              href="https://github.com/bush1D3v"
              target="_blank"
            >
              <img
                className="rounded-full -mt-4"
                src="https://avatars.githubusercontent.com/u/133554156?v=4"
                alt="Victor photo"
                loading="lazy"
              />
            </a>
            <p className="px-2 md:px-4 lg:px-0 text-justify md:text-center md:text-3xl lg:text-4xl">
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
          </article>
        </section>
      </div>     
    </main>
  );
}
