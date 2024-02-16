import { type ReactElement } from "react";
import AnchorLink from "@/components/AnchorLink";
import { handleLinkClick } from "@/functions";
import {
  WITHDRAW,
  DEPOSIT,
  PIX,
  CARD
} from "@/utils/routerPaths";

export default function HooksList(): ReactElement {
  return (
    <ul
      className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8 w-11/12 animate-fade-down animate-duration-700 animate-ease-in-out"
      data-testid="HooksList"
    >
      <li className="flex w-full" data-testid="HooksListItemWithdraw">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(WITHDRAW)}
          param={WITHDRAW}
          text="WITHDRAW"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemDeposit">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(DEPOSIT)}
          param={DEPOSIT}
          text="DEPOSIT"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemCard">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(CARD)}
          param={CARD}
          text="CARD"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemPix">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(PIX)}
          param={PIX}
          text="PIX"
        />
      </li>
    </ul>
  );
}
