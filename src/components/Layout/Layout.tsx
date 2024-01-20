import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

/* Interface criada para exibir componente na documentação Storybook,
sem forçar um valor aleatório diretamente no componente */
interface LayoutStorybookProps {
  children?: ReactElement
}

export default function Layout({ children }: LayoutStorybookProps): ReactElement {
  return (
    <div data-testid="Layout">
      <Header />
      {typeof children !== "undefined" ? (children) : (<Outlet />)}
      <Footer />
    </div>
  );
}
