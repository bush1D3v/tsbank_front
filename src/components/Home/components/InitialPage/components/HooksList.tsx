import { type ReactElement } from "react";
import AnchorLink from "../../../../AnchorLink";
import { handleLinkClick } from "../../../../../functions";

export default function HooksList(): ReactElement {
  const {
    VITE_REACT_APP_WITHDRAW,
    VITE_REACT_APP_DEPOSIT,
    VITE_REACT_APP_PIX,
    VITE_REACT_APP_CARD
  } = import.meta.env;

  return (
    <ul
      className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8 w-11/12 animate-fade-down animate-duration-700 animate-ease-in-out"
      data-testid="HooksList"
    >
      <li className="flex w-full" data-testid="HooksListItemWithdraw">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_WITHDRAW)}
          param={VITE_REACT_APP_WITHDRAW}
          text="WITHDRAW"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemDeposit">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_DEPOSIT)}
          param={VITE_REACT_APP_DEPOSIT}
          text="DEPOSIT"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemCard">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_CARD)}
          param={VITE_REACT_APP_CARD}
          text="CARD"
        />
      </li>
      <li className="flex w-full" data-testid="HooksListItemPix">
        <AnchorLink
          buttonBg="bg-saturatedBlue hover:bg-transparent"
          func={handleLinkClick(VITE_REACT_APP_PIX)}
          param={VITE_REACT_APP_PIX}
          text="PIX"
        />
      </li>
    </ul>
  );
}
