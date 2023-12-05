import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";

import { Login, Register } from "./components";
import { LOGIN, REGISTER } from "../../utils";

export default function Form(): ReactElement {
  const { pathname } = useLocation();

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case REGISTER:
        return <Register />;
      case LOGIN:
        return <Login />;
      default:
        return <Login />;
    }
  };

  return (
    <main className="h-[100dvh] flex items-center justify-center flex-col">
      {handleFormType(pathname)}
    </main>
  );
}
