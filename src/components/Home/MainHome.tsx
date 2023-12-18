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
import {
  HOME,
  WITHDRAW,
  DEPOSIT,
  CARD,
  PIX,
  CREDIT_PAYMENT,
  CARD_TRANSACTION,
  CARD_UPDATE,
  CARD_CREATE,
} from "../../utils";

export default function MainHome(): ReactElement {
  const { pathname } = useLocation();

  const handleFormType = (currPath: string): ReactElement => {
    if (currPath.startsWith("/transaction/")) {
      return <TransactionDetail />;
    }

    switch (currPath) {
      case HOME:
        return <Home />;
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
        return <Home />;
    }
  };

  return (
    <main className="min-h-[82dvh] justify-center items-center flex flex-col">
      {handleFormType(pathname)}
    </main>
  );
}
