import { type ReactElement } from "react";
import { useLocation } from "react-router-dom";
import {
  CardDetail,
  CreditPayment,
  CardTransaction,
  CardUpdate,
  CardCreate
} from "./components";

export default function MainCard(): ReactElement {
  const { pathname } = useLocation();

  const {
    VITE_REACT_APP_CREDIT_PAYMENT,
    VITE_REACT_APP_CARD_UPDATE,
    VITE_REACT_APP_CARD,
    VITE_REACT_APP_CARD_TRANSACTION,
    VITE_REACT_APP_CARD_CREATE
  } = import.meta.env;

  const handleFormType = (currPath: string): ReactElement => {
    switch (currPath) {
      case VITE_REACT_APP_CARD:
        return <CardDetail />;
      case VITE_REACT_APP_CREDIT_PAYMENT:
        return <CreditPayment />;
      case VITE_REACT_APP_CARD_TRANSACTION:
        return <CardTransaction />;
      case VITE_REACT_APP_CARD_UPDATE:
        return <CardUpdate />;
      case VITE_REACT_APP_CARD_CREATE:
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
