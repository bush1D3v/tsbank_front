import tsbankLogo from "./assets/tsbank-no-bg.svg";

export default function App() {
  return (
    <main className="flex flex-col items-center gap-14 justify-center h-[100vh]">
      <a href="https://github.com/bush1D3v/tsbank_api" target="_blank" className="flex content-center w-[60%]">
        <img src={tsbankLogo} alt="Tsbank logo" />
      </a>
      <p className="font-bold text-2xl px-80 text-center">
        Olá! Ficamos felizes que você esteja curioso para conhecer o projeto TSBank! 😄 <br />
        Enquanto a sua primeira página ainda não é criada, sinta-se a vontade para clicar na imagem, você será redirecionado ao repositório do nosso servidor! 🌐
      </p>
    </main>
  );
}
