import { useState, type ReactElement, useEffect } from "react";
import { errorReplace } from "@/functions";
import Loading from "@/components/Loading";
import { cardDetailSubmit, type CardDetailResponseProps } from "../functions";
import { CardModal, HooksList } from "./components";
import { type CardData } from "@/types";

export default function CardDetail(): ReactElement {
  const [ cardData, setCardData ] = useState<CardData[]>([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: CardDetailResponseProps = await cardDetailSubmit();
        setCardData(response.message as CardData[]);
        if (response.success) {
          sessionStorage.setItem("cardsData", JSON.stringify(response.message));
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

    const cachedData = sessionStorage.getItem("cardsData");
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
    <div
      className="flex flex-col text-center items-center max-h-[82dvh] gap-4
      md:gap-8 lg:gap-12 xl:gap-16 justify-center lg:w-11/12 xl:w-9/12 py-2"
      data-testid="CardDetail"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {typeof cardData === "string" ? (
            <p className="px-4 text-center text-lg md:text-xl lg:text-2xl">{errorReplace(cardData)}</p>
          ) : (
            <CardModal cardData={cardData} />
          )}
          <HooksList cardData={cardData} />
        </>
      )}
    </div>
  );
}
