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
  PROFILE,
  EDIT,
  EDIT_ALL,
  EDIT_EMAIL,
  EDIT_PASSWORD,
  EDIT_PHONE,
  DELETE_USER,
  PIX,
  WITHDRAW,
  DEPOSIT,
  CARD,
  CARD_CREATE,
  CREDIT_PAYMENT,
  CARD_UPDATE,
  CARD_TRANSACTION,
  DETAIL_TRANSACTION
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
            path: EDIT,
            element: <Profile />
          },
          {
            path: EDIT_ALL,
            element: <Profile />
          },
          {
            path: EDIT_EMAIL,
            element: <Profile />
          },
          {
            path: EDIT_PASSWORD,
            element: <Profile />
          },
          {
            path: EDIT_PHONE,
            element: <Profile />
          },
          {
            path: EDIT_ALL,
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
