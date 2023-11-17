import tsbankLogo from "./assets/tsbank-no-bg.svg";

export default function App() {
  return (
    <main className="flex flex-col gap-6 md:gap-8 lg:gap-10 p-4 md:p-8 lg:p-12 items-center justify-center h-[100vh]">
      <a href="https://github.com/bush1D3v/tsbank_api" target="_blank" className="">
        <img src={tsbankLogo} alt="Tsbank logo" />
      </a>
      <p className="text-xl font-bold text-justify md:text-2xl lg:text-3xl lg:text-center">
        Olá! Ficamos felizes que você esteja curioso para conhecer o projeto TSBank! 😄 <br />
        Enquanto a sua primeira página ainda não é criada, sinta-se a vontade para clicar na imagem, você será redirecionado ao repositório do nosso servidor! 🌐
      </p>
    </main>
  );
}
