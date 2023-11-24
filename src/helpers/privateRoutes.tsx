import { type ReactElement, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { LOGIN } from "../utils/routePaths";
import { UserDataContext } from "../contexts/userData";

export default function PrivateRoutes(): ReactElement {
  const { isUserLoggedIn } = useContext(UserDataContext);

  return isUserLoggedIn ? <Outlet /> : <Navigate to={LOGIN} />;
}
