import { Navigate, createBrowserRouter } from "react-router-dom";

import { PrivateRoutes } from "../helpers";
import {
  ErrorPage,
  Layout
} from "../components";
import {
  Home,
  Register,
  About,
  Profile
} from "../pages";

const {
  VITE_REACT_APP_ROOT,
  VITE_REACT_APP_LOGIN,
  VITE_REACT_APP_REGISTER,
  VITE_REACT_APP_HOME,
  VITE_REACT_APP_WITHDRAW,
  VITE_REACT_APP_DEPOSIT,
  VITE_REACT_APP_PIX,
  VITE_REACT_APP_PROFILE,
  VITE_REACT_APP_CREDIT_PAYMENT,
  VITE_REACT_APP_DETAIL_TRANSACTION,
  VITE_REACT_APP_CARD_UPDATE,
  VITE_REACT_APP_DELETE_USER,
  VITE_REACT_APP_UPDATE_PHONE,
  VITE_REACT_APP_UPDATE_EMAIL,
  VITE_REACT_APP_ABOUT,
  VITE_REACT_APP_UPDATE_PASSWORD,
  VITE_REACT_APP_UPDATE_ALL,
  VITE_REACT_APP_UPDATE,
  VITE_REACT_APP_CARD,
  VITE_REACT_APP_CARD_TRANSACTION,
  VITE_REACT_APP_CARD_CREATE
} = import.meta.env;

const router = createBrowserRouter([
  {
    path: VITE_REACT_APP_ROOT,
    element: <Navigate to={VITE_REACT_APP_LOGIN} replace />,
    errorElement: <ErrorPage />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: VITE_REACT_APP_HOME,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_DETAIL_TRANSACTION,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_WITHDRAW,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_DEPOSIT,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_CARD,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_CARD_CREATE,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_CREDIT_PAYMENT,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_CARD_UPDATE,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_CARD_TRANSACTION,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_PIX,
            element: <Home />
          },
          {
            path: VITE_REACT_APP_ABOUT,
            element: <About />
          },
          {
            path: VITE_REACT_APP_PROFILE,
            element: <Profile />,
          },
          {
            path: VITE_REACT_APP_UPDATE,
            element: <Profile />
          },
          {
            path: VITE_REACT_APP_UPDATE_ALL,
            element: <Profile />
          },
          {
            path: VITE_REACT_APP_UPDATE_EMAIL,
            element: <Profile />
          },
          {
            path: VITE_REACT_APP_UPDATE_PASSWORD,
            element: <Profile />
          },
          {
            path: VITE_REACT_APP_UPDATE_PHONE,
            element: <Profile />
          },
          {
            path: VITE_REACT_APP_DELETE_USER,
            element: <Profile />
          },
        ]
      },
    ]
  },
  { path: VITE_REACT_APP_REGISTER, element: <Register /> },
  { path: VITE_REACT_APP_LOGIN, element: <Register /> },
]);

export default router;
