import { type ReactElement } from "react";
import { handleLinkClick } from "@/functions";
import { type CardData } from "@/types";
import AnchorLink from "@/components/AnchorLink";

export default function HooksList({ cardData }: { cardData: CardData[] }): ReactElement {
  const {
    VITE_REACT_APP_CREDIT_PAYMENT,
    VITE_REACT_APP_CARD_UPDATE,
    VITE_REACT_APP_CARD_TRANSACTION,
    VITE_REACT_APP_CARD_CREATE
  } = import.meta.env;

  return (
    <ul
      className="flex flex-col lg:flex-row w-10/12 lg:w-full gap-5 md:gap-6 lg:gap-8
      animate-fade-down animate-duration-700 animate-ease-in-out"
      data-testid="HooksList"
    >
      {(cardData[ 0 ]?.credit || cardData[ 0 ]?.debit) && (cardData[ 1 ]?.credit || cardData[ 1 ]?.debit) ? (
        <></>
      ) : (
        <li className="flex w-full" data-testid="HooksListItemCreate">
          <AnchorLink
            buttonBg="bg-saturatedBlue hover:bg-transparent"
            func={handleLinkClick(VITE_REACT_APP_CARD_CREATE)}
            param={VITE_REACT_APP_CARD_CREATE}
            text="CREATE CARD"
          />
        </li>
      )}
      <li className="flex w-full" data-testid="HooksListItemUpdate">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_CARD_UPDATE)}
          param={VITE_REACT_APP_CARD_UPDATE}
          text="UPDATE PASSWORD"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemTransaction">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_CARD_TRANSACTION)}
          param={VITE_REACT_APP_CARD_TRANSACTION}
          text="CARD TRANSACTION"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemPayment">
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
