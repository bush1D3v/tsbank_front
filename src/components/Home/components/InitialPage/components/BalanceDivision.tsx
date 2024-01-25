import { type ReactElement } from "react";
import { GiMoneyStack } from "react-icons/gi";

interface balanceDivisionProps {
  balance: string
}

export default function BalanceDivision({ balance }: balanceDivisionProps): ReactElement {
  return (
    <div
      className="flex gap-4 justify-center w-full animate-fade-down animate-duration-700 animate-ease-in-out"
      data-testid="BalanceDivision">
      <GiMoneyStack
        className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15"
        data-testid="BalanceDivisionIcon" />
      <p
        className="text-2xl md:text-3xl lg:text-4xl"
        data-testid="BalanceDivisionValue">
        {balance}
      </p>
    </div>
  );
}
