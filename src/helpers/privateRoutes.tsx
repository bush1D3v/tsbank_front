import { type ReactElement, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserDataContext } from "@/contexts";
import { LOGIN } from "@/utils/routerPaths";

export default function PrivateRoutes(): ReactElement {
  const { isUserLoggedIn } = useContext(UserDataContext);

  return isUserLoggedIn ? <Outlet /> : <Navigate to={LOGIN} />;
}
