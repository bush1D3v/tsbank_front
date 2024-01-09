import { type ReactElement, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserDataContext } from "../contexts";

export default function PrivateRoutes(): ReactElement {
  const { isUserLoggedIn } = useContext(UserDataContext);

  const {
    VITE_REACT_APP_LOGIN
  } = import.meta.env;

  return isUserLoggedIn ? <Outlet /> : <Navigate to={VITE_REACT_APP_LOGIN} />;
}
