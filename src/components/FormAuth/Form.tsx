import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import { LOGIN, REGISTER } from "../../utils";

export function Form(): ReactElement {
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
    <main className="h-screen flex items-center justify-evenly flex-col">
      {handleFormType(pathname)}
    </main>
  );
}
