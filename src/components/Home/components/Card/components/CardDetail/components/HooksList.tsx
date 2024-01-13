import { type ReactElement } from "react";
import { handleLinkClick } from "../../../../../../../functions";
import AnchorLink from "../../../../../../AnchorLink";

export default function HooksList(): ReactElement {
  const {
    VITE_REACT_APP_CREDIT_PAYMENT,
    VITE_REACT_APP_CARD_UPDATE,
    VITE_REACT_APP_CARD_TRANSACTION,
    VITE_REACT_APP_CARD_CREATE
  } = import.meta.env;

  return (
    <ul className="flex flex-col lg:flex-row w-10/12 lg:w-full gap-5 md:gap-6 lg:gap-8 animate-fade-down animate-duration-700 animate-ease-in-out">
      <li className="flex w-full">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_CARD_CREATE)}
          param={VITE_REACT_APP_CARD_CREATE}
          text="CREATE CARD"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_CARD_UPDATE)}
          param={VITE_REACT_APP_CARD_UPDATE}
          text="UPDATE PASSWORD"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_CARD_TRANSACTION)}
          param={VITE_REACT_APP_CARD_TRANSACTION}
          text="CARD TRANSACTION"
        />
      </li>
      <li className="flex w-full">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_CREDIT_PAYMENT)}
          param={VITE_REACT_APP_CREDIT_PAYMENT}
          text="CREDIT PAYMENT"
        />
      </li>
    </ul>
  );
}
