import { Navigate, createBrowserRouter } from "react-router-dom";

import { PrivateRoutes } from "../helpers";
import {
  ErrorPage,
  Layout
} from "../components";
import {
  ROOT,
  HOME,
  REGISTER,
  LOGIN,
  ABOUT,
  PROFILE
} from "../utils";
import {
  Home,
  Register,
  About,
  Profile
} from "../pages";

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Navigate to={LOGIN} replace />,
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
          },
          {
            path: ABOUT,
            element: <About />
          },
          {
            path: PROFILE,
            element: <Profile />
          },
        ]
      },
    ]
  },
  { path: REGISTER, element: <Register /> },
  { path: LOGIN, element: <Register /> },
]);

export default router;
