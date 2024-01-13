import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";

import { Login, Register } from "./components";

export default function Form(): ReactElement {
  const { pathname } = useLocation();

  const {
    VITE_REACT_APP_REGISTER,
    VITE_REACT_APP_LOGIN
  } = import.meta.env;

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case VITE_REACT_APP_REGISTER:
        return <Register />;
      case VITE_REACT_APP_LOGIN:
        return <Login />;
      default:
        return <Login />;
    }
  };

  return (
    <main className="h-[100dvh] flex items-center justify-center flex-col animate-fade-down animate-duration-700 animate-ease-in-out">
      {handleFormType(pathname)}
    </main>
  );
}
