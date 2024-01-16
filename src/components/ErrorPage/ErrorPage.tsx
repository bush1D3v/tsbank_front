import { type ReactElement } from "react";
import { Link, useRouteError } from "react-router-dom";

/* Interface criada para exibir componente na documentação Storybook, sem forçar um valor
aleatório diretamente no componente, adicionando algo como "|| { status: 404 }" */
type ErrorPageStorybookProps = {
  error?: { status: number };
};

export default function ErrorPage({ error }: ErrorPageStorybookProps): ReactElement {
  const routeError = useRouteError() as { status: number };

  const { status } = routeError || error;

  const {
    VITE_REACT_APP_HOME
  } = import.meta.env;

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-8 text-center animate-fade animate-duration-500 animate-ease-in-out">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">Oops! 😯</h1>
      <p className="font-bold text-xl md:text-2xl lg:text-3xl px-6 md:px-10 lg:px-14">
        It seems like you got lost in the financial maze, but don't worry! Our experts are working to resolve this. 👨‍💻<br />
        In the meantime, check out our amazing resources! 🚀🌟
      </p>
      <p className="text-6xl md:text-7xl lg:text-8xl font-bold">{status}</p>
      <Link to={VITE_REACT_APP_HOME}>
        <button className="rounded-3xl bg-whiteBlue text-lg md:text-xl py-4 md:py-5
        lg:py-6 px-8 md:px-10 lg:px-12 font-bold hover:text-purple transition-all"
          type="button">
          Return to home page
        </button>
      </Link>
    </main>
  );
}
