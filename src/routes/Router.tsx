import { Navigate, createBrowserRouter } from "react-router-dom";

import { PrivateRoutes } from "../helpers";
import {
  ROOT,
  HOME,
  REGISTER,
  LOGIN
} from "../utils";
import {
  ErrorPage,
  Layout
} from "../components";
import {
  Home,
  Register
} from "../pages";

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Navigate to={HOME} replace />,
    errorElement: <ErrorPage />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: HOME,
            element: <Home />
          }
        ]
      },
    ]
  },
  { path: REGISTER, element: <Register /> },
  { path: LOGIN, element: <Register /> },
]);

export default router;
