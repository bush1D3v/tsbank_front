import { type ReactElement } from "react";
import { type CardData } from "../../../../../../../types";

export default function CardModal({ cardData }: { cardData: CardData[] }): ReactElement {
  return (
    <ul
      className="pr-1 flex flex-col gap-4 md:gap-6 lg:gap-4 w-full
      max-h-[50dvh] overflow-y-scroll lg:w-3/5 xl:w-2/4 animate-fade-down animate-duration-1000 animate-ease-in-out"
      data-testid="CardModal"
    >
      {cardData.map((transaction, index) => (
        <li
          className="relative text-center flex flex-col gap-2 md:gap-4
          justify-center items-center bg-saturatedBlue rounded-2xl p-4
          md:text-xl lg:text-2xl cursor-pointer hover:bg-darkBlue border-2
          border-darkBlue transition-all delay-75 ease-in-out"
          data-testid="CardModalListItem"
          key={index}
        >
          <>
            {transaction.credit && (
              <>
                <h2>Credit</h2>
                <p>Credit: {transaction.credit.balance}</p>
                <p>CVV: {transaction.credit.cvv}</p>
                <p>Expiration Date: {transaction.credit.expiration_date}</p>
                <p>Card Holder Name: {transaction.credit.cardholder_name}</p>
                <p>Card Number: {transaction.credit.card_number}</p>
              </>
            )}
            {transaction.debit && (
              <>
                <h2>Debit</h2>
                <p>CVV: {transaction.debit.cvv}</p>
                <p>Expiration Date: {transaction.debit.expiration_date}</p>
                <p>Card Holder Name: {transaction.debit.cardholder_name}</p>
                <p>Card Number: {transaction.debit.card_number}</p>
              </>
            )}
          </>
        </li>
      ))}
    </ul>
  );
}
