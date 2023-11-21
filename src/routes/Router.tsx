import { Navigate, createBrowserRouter } from "react-router-dom";

import {
  ROOT,
  HOME,
  REGISTER,
  LOGIN
} from "../utils";
import { ErrorPage } from "../components";
import { Register } from "../pages";

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Navigate to={HOME} replace />,
    errorElement: <ErrorPage />,
  },
  { path: REGISTER, element: <Register /> },
  { path: LOGIN, element: <Register /> },
]);

export default router;
