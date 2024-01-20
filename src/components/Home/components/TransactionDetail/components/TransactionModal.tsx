import { type ReactElement } from "react";
import { type SummaryData } from "../../functions";
import { balanceFormat } from "../../../../../functions";

interface TransactionModalProps {
  transactionData?: SummaryData
}

export default function TransactionModal({
  transactionData
}: TransactionModalProps): ReactElement {
  return (
    <article className="flex flex-col gap-4 justify-center items-center text-xl
    font-bold animate-fade-down animate-ease-in-out animate-500">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-14">
        TRANSACTION DETAILS
      </h1>
      <div className="text-center flex flex-col gap-2 md:gap-4
        bg-saturatedBlue rounded-2xl p-4 md:text-xl lg:text-2xl
        cursor-pointer hover:bg-darkBlue border-2 border-darkBlue
        transition-all scale-125 hover:scale-150 delay-75 ease-in-out
        capitalize">
        <p>{transactionData?.description}</p>
        <p>
          {
            transactionData?.type === "output" ? " - " :
              transactionData?.type === "input" ? " + " : ""
          }
          {
            balanceFormat(typeof transactionData?.value === "number" ?
              transactionData?.value : 0)
          }
        </p>
        <p>{transactionData?.date}</p>
      </div>
    </article>
  );
}
