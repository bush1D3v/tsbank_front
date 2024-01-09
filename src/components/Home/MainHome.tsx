import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";
import {
  Home,
  Withdraw,
  Deposit,
  MainCard,
  Pix,
  TransactionDetail
} from "./components";

export default function MainHome(): ReactElement {
  const { pathname } = useLocation();

  const {
    VITE_REACT_APP_HOME,
    VITE_REACT_APP_WITHDRAW,
    VITE_REACT_APP_DEPOSIT,
    VITE_REACT_APP_PIX,
    VITE_REACT_APP_CREDIT_PAYMENT,
    VITE_REACT_APP_CARD_UPDATE,
    VITE_REACT_APP_CARD,
    VITE_REACT_APP_CARD_TRANSACTION,
    VITE_REACT_APP_CARD_CREATE
  } = import.meta.env;

  const handleFormType = (currPath: string): ReactElement => {
    if (currPath.startsWith("/transaction/")) {
      return <TransactionDetail />;
    }

    switch (currPath) {
      case VITE_REACT_APP_HOME:
        return <Home />;
      case VITE_REACT_APP_WITHDRAW:
        return <Withdraw />;
      case VITE_REACT_APP_DEPOSIT:
        return <Deposit />;
      case VITE_REACT_APP_PIX:
        return <Pix />;
      case VITE_REACT_APP_CARD:
        return <MainCard />;
      case VITE_REACT_APP_CREDIT_PAYMENT:
        return <MainCard />;
      case VITE_REACT_APP_CARD_TRANSACTION:
        return <MainCard />;
      case VITE_REACT_APP_CARD_UPDATE:
        return <MainCard />;
      case VITE_REACT_APP_CARD_CREATE:
        return <MainCard />;
      default:
        return <Home />;
    }
  };

  return (
    <main className="min-h-[82dvh] justify-center items-center flex flex-col">
      {handleFormType(pathname)}
    </main>
  );
}
