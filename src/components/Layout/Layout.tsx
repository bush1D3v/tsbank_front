import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

export default function Layout(): ReactElement {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
