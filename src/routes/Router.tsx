import { Navigate, createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "@/helpers";
import {
  ErrorPage,
  Layout
} from "@/components";
import {
  Home,
  Register,
  About,
  Profile
} from "@/pages";
import {
  ROOT,
  LOGIN,
  REGISTER,
  HOME,
  WITHDRAW,
  DEPOSIT,
  PIX,
  PROFILE,
  CREDIT_PAYMENT,
  DETAIL_TRANSACTION,
  CARD_UPDATE,
  DELETE_USER,
  UPDATE_PHONE,
  UPDATE_EMAIL,
  ABOUT,
  UPDATE_PASSWORD,
  UPDATE_ALL,
  UPDATE,
  CARD,
  CARD_TRANSACTION,
  CARD_CREATE
} from "@/utils/routerPaths";

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
            path: DETAIL_TRANSACTION,
            element: <Home />
          },
          {
            path: WITHDRAW,
            element: <Home />
          },
          {
            path: DEPOSIT,
            element: <Home />
          },
          {
            path: CARD,
            element: <Home />
          },
          {
            path: CARD_CREATE,
            element: <Home />
          },
          {
            path: CREDIT_PAYMENT,
            element: <Home />
          },
          {
            path: CARD_UPDATE,
            element: <Home />
          },
          {
            path: CARD_TRANSACTION,
            element: <Home />
          },
          {
            path: PIX,
            element: <Home />
          },
          {
            path: ABOUT,
            element: <About />
          },
          {
            path: PROFILE,
            element: <Profile />,
          },
          {
            path: UPDATE,
            element: <Profile />
          },
          {
            path: UPDATE_ALL,
            element: <Profile />
          },
          {
            path: UPDATE_EMAIL,
            element: <Profile />
          },
          {
            path: UPDATE_PASSWORD,
            element: <Profile />
          },
          {
            path: UPDATE_PHONE,
            element: <Profile />
          },
          {
            path: DELETE_USER,
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
