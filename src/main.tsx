import "./styles/globals.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { UserDataProvider } from "./contexts";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./routes/Router";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
        <RouterProvider router={router} />
      </UserDataProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
