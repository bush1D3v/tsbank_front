import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";
import {
  InitialPage,
  Withdraw,
  Deposit,
  MainCard,
  Pix,
  TransactionDetail
} from "./components";
import {
  HOME,
  WITHDRAW,
  DEPOSIT,
  PIX,
  CREDIT_PAYMENT,
  CARD_UPDATE,
  CARD,
  CARD_TRANSACTION,
  CARD_CREATE
} from "@/utils/routerPaths";

export default function MainHome(): ReactElement {
  const { pathname } = useLocation();

  const handleFormType = (currPath: string): ReactElement => {
    if (currPath.startsWith("/transaction/")) {
      return <TransactionDetail />;
    }

    switch (currPath) {
      case HOME:
        return <InitialPage />;
      case WITHDRAW:
        return <Withdraw />;
      case DEPOSIT:
        return <Deposit />;
      case PIX:
        return <Pix />;
      case CARD:
        return <MainCard />;
      case CREDIT_PAYMENT:
        return <MainCard />;
      case CARD_TRANSACTION:
        return <MainCard />;
      case CARD_UPDATE:
        return <MainCard />;
      case CARD_CREATE:
        return <MainCard />;
      default:
        return <InitialPage />;
    }
  };

  return (
    <main className="min-h-[82dvh] justify-center items-center flex flex-col animate-fade-down animate-duration-700 animate-ease-in-out">
      {handleFormType(pathname)}
    </main>
  );
}
