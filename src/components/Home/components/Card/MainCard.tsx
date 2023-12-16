import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";
import {
  CardDetail,
  CreditPayment,
  CardTransaction,
  CardUpdate,
  CardCreate
} from "./components";
import {
  CARD,
  CREDIT_PAYMENT,
  CARD_TRANSACTION,
  CARD_UPDATE,
  CARD_CREATE
} from "../../../../utils";

export default function MainCard(): ReactElement {
  const { pathname } = useLocation();

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case CARD:
        return <CardDetail />;
      case CREDIT_PAYMENT:
        return <CreditPayment />;
      case CARD_TRANSACTION:
        return <CardTransaction />;
      case CARD_UPDATE:
        return <CardUpdate />;
      case CARD_CREATE:
        return <CardCreate />;
      default:
        return <CardDetail />;
    }
  };

  return (
    <>
      {handleFormType(pathname)}
    </>
  );
}
