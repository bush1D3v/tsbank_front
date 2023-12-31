import { useState, type ReactElement, useEffect } from "react";
import AnchorLink from "../../../../AnchorLink";
import { errorReplace, handleLinkClick } from "../../../../../functions";
import Loading from "../../../../Loading";
import {
  cardDetailSubmit,
  type CardDetailResponseProps,
  type CardData
} from "./functions";
import {
  CARD_CREATE,
  CREDIT_PAYMENT,
  CARD_TRANSACTION,
  CARD_UPDATE
} from "../../../../../utils";

export default function CardDetail(): ReactElement {
  const [ cardData, setCardData ] = useState<CardData[]>([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: CardDetailResponseProps = await cardDetailSubmit();
        setCardData(response.message as CardData[]);
        if (response.success) {
          sessionStorage.setItem("cardsInfo", JSON.stringify(response.message));
        } else {
          sessionStorage.setItem("cardsError", JSON.stringify(response.message));
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const cachedData = sessionStorage.getItem("cardsInfo");
    const errorData = sessionStorage.getItem("cardsError");

    if (cachedData) {
      setCardData(JSON.parse(cachedData) as CardData[]);
      sessionStorage.removeItem("cardsError");
      setIsLoading(false);
    } else if (errorData) {
      setCardData(JSON.parse(errorData));
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  return (
    <section className="flex flex-col text-center items-center max-h-[82dvh] gap-4
    md:gap-8 lg:gap-12 xl:gap-16 justify-center lg:w-11/12 xl:w-9/12 py-2">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {typeof cardData === "string" ? (
            <p className="px-4 text-center text-lg md:text-xl lg:text-2xl">{errorReplace(cardData)}</p>
          ) : (
            <ul
              className="pr-1 flex flex-col gap-4 md:gap-6 lg:gap-4 w-full
              max-h-[50dvh] overflow-y-scroll lg:w-3/5 xl:w-2/4"
            >
              {cardData.map((transaction, index) => (
                <li
                  className="group relative text-center flex flex-col gap-2 md:gap-4
                  justify-center items-center bg-saturatedBlue rounded-2xl p-4
                  md:text-xl lg:text-2xl cursor-pointer hover:bg-darkBlue border-2
                  border-darkBlue transition-all delay-75 ease-in-out"
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
          )}
        </>
      )}
      <ul className="flex flex-col lg:flex-row w-10/12 lg:w-full gap-5 md:gap-6 lg:gap-8">
        <li className="flex w-full">
          <AnchorLink
            buttonBg="bg-saturatedBlue hover:bg-transparent"
            func={handleLinkClick(CARD_CREATE)}
            param={CARD_CREATE}
            text="CREATE CARD"
          />
        </li>
        <li className="flex w-full">
          <AnchorLink
            buttonBg="bg-saturatedBlue hover:bg-transparent"
            func={handleLinkClick(CARD_UPDATE)}
            param={CARD_UPDATE}
            text="UPDATE PASSWORD"
          />
        </li>
        <li className="flex w-full">
          <AnchorLink
            buttonBg="bg-saturatedBlue hover:bg-transparent"
            func={handleLinkClick(CARD_TRANSACTION)}
            param={CARD_TRANSACTION}
            text="CARD TRANSACTION"
          />
        </li>
        <li className="flex w-full">
          <AnchorLink
            buttonBg="bg-saturatedBlue hover:bg-transparent"
            func={handleLinkClick(CREDIT_PAYMENT)}
            param={CREDIT_PAYMENT}
            text="CREDIT PAYMENT"
          />
        </li>
      </ul>
    </section>
  );
}
