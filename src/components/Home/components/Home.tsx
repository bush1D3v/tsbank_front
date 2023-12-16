import AnchorLink from "../../AnchorLink";
import { useState, type ReactElement, useEffect } from "react";
import { BsCashCoin } from "react-icons/bs";
import { handleLinkClick, jsonUserParser } from "../../../functions";
import {
  getHistory,
  type HistoryData,
  type HistoryResponseProps
} from "./functions";
import {
  CARD,
  DEPOSIT,
  PIX,
  WITHDRAW
} from "../../../utils";
import Loading from "../../Loading";

export default function Home(): ReactElement {
  const [ historyData, setHistoryData ] = useState<HistoryData[]>([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: HistoryResponseProps = await getHistory();
        setHistoryData(response.message as HistoryData[]);
        if (response.success) {
          sessionStorage.setItem("historyData", JSON.stringify(response.message));
        } else {
          sessionStorage.setItem("historyError", JSON.stringify(response.message));
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const cachedData = sessionStorage.getItem("historyData");
    const errorData = sessionStorage.getItem("historyError");

    if (cachedData) {
      setHistoryData(JSON.parse(cachedData) as HistoryData[]);
      sessionStorage.removeItem("historyError");
      setIsLoading(false);
    } else if (errorData) {
      setHistoryData(JSON.parse(errorData));
      fetchData();
    } else {
      fetchData();
    }
  }, []);

  const { user } = jsonUserParser(sessionStorage.getItem("userInfo"));

  const digits = user.balance.toString().split(".");

  let cents: string;

  if (digits[ 1 ]) {
    cents = digits[ 1 ].length === 2 ? digits[ 1 ] : digits[ 1 ] + 0;
  } else {
    cents = "00";
  }

  return (
    <section className="flex flex-col items-center gap-14 justify-center lg:w-7/12">
      <h1 className="text-xl md:text-2xl lg:text-3l xl:text-4xl font-bold">Hello {user.name}👋</h1>
      <div className="flex gap-4 justify-center w-full">
        <BsCashCoin className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15" />
        <p className="text-2xl md:text-3xl lg:text-4xl">{digits[ 0 ]}.{cents} $</p>
      </div>
      <ul className="flex flex-col lg:flex-row gap-8 w-11/12">
        <li className="flex w-full">
          <AnchorLink
            buttonBg="bg-saturatedBlue hover:bg-transparent"
            func={handleLinkClick(WITHDRAW)}
            param={WITHDRAW}
            text="WITHDRAW"
          />
        </li>
        <li className="flex w-full">
          <AnchorLink
            buttonBg="bg-saturatedBlue hover:bg-transparent"
            func={handleLinkClick(DEPOSIT)}
            param={DEPOSIT}
            text="DEPOSIT"
          />
        </li>
        <li className="flex w-full">
          <AnchorLink
            buttonBg="bg-saturatedBlue hover:bg-transparent"
            func={handleLinkClick(CARD)}
            param={CARD}
            text="CARD"
          />
        </li>
        <li className="flex w-full">
          <AnchorLink
            buttonBg="bg-saturatedBlue hover:bg-transparent"
            func={handleLinkClick(PIX)}
            param={PIX}
            text="PIX"
          />
        </li>
      </ul>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {typeof historyData === "string" ? (
            <div className="text-center">
              <p>{historyData}</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {[ ...historyData ].reverse().map((history, index) => (
                <li className="text-center" key={index}>
                  <p>{history.description}</p>
                  <p>{history.date}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
}
