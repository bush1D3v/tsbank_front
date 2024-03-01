import { type ReactElement } from "react";
import { type CardData } from "@/types";
import AnchorLink from "@/components/AnchorLink";
import {
  CREDIT_PAYMENT,
  CARD_UPDATE,
  CARD_TRANSACTION,
  CARD_CREATE
} from "@/utils/routerPaths";

export default function HooksList({ cardData }: { cardData: CardData[] }): ReactElement {
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
            param={CARD_CREATE}
            text="CREATE CARD"
          />
        </li>
      )}
      <li className="flex w-full" data-testid="HooksListItemUpdate">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          param={CARD_UPDATE}
          text="UPDATE PASSWORD"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemTransaction">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          param={CARD_TRANSACTION}
          text="CARD TRANSACTION"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemPayment">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          param={CREDIT_PAYMENT}
          text="CREDIT PAYMENT"
        />
      </li>
    </ul>
  );
}
