import AnchorLink from "../../AnchorLink";
import Loading from "../../Loading";
import { GiMoneyStack } from "react-icons/gi";
import {
  useState,
  type ReactElement,
  useEffect
} from "react";
import {
  handleLinkClick,
  jsonUserParser,
  balanceFormat,
  errorReplace,
  createHash,
} from "../../../functions";
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
import { useNavigate } from "react-router-dom";

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
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  const navigation = useNavigate();

  const navigate = (to: string) => {
    navigation(to);
  };

  const { user } = jsonUserParser(sessionStorage.getItem("userInfo"));

  const balance = balanceFormat(user.balance);

  return (
    <section className="flex flex-col items-center justify-center gap-8 md:gap-14 lg:w-7/12">
      <h1 className="text-xl md:text-2xl lg:text-3l xl:text-4xl font-bold text-center">Hello <br /> {user.name}👋</h1>
      <div className="flex gap-4 justify-center w-full">
        <GiMoneyStack className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15" />
        <p className="text-2xl md:text-3xl lg:text-4xl">{balance}</p>
      </div>
      <ul className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8 w-11/12">
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
          <p className="md:-mt-8 -mb-6 md:-mb-12 text-lg md:text-xl lg:text-2xl font-bold">&#x25BC; HISTORY &#x25BC;</p>
          {typeof historyData === "string" ? (
            <p className="px-4 text-center text-lg md:text-xl lg:text-2xl">{errorReplace(historyData)}</p>
          ) : (
            <ul
              className="pr-1 flex flex-col gap-4 md:gap-6 lg:gap-4 w-full max-h-[18dvh]
              md:max-h-[19dvh] overflow-y-scroll lg:w-3/5 xl:w-2/4"
            >
              {[ ...historyData ].reverse().map((history, index) => (
                <li
                  className="group relative text-center flex gap-2 md:gap-4 justify-center
                  items-center bg-saturatedBlue rounded-2xl p-4 md:text-xl
                  lg:text-2xl cursor-pointer hover:bg-darkBlue border-2 border-darkBlue
                  transition-all delay-75 ease-in-out"
                  key={index}
                  onClick={() => navigate(`/transaction/${createHash(history.id.toString())}`)}
                >
                  <p className="font-bold capitalize">{history.description}</p>
                  <p className="text-base md:text-lg lg:text-xl">{history.date}</p>
                  <span
                    className="absolute pr-2 right-0 text-whiteBlue text-lg md:text-xl
                    group-hover:text-desaturatedBlue transition-all delay-75 ease-in-out"
                  >
                    &gt;
                  </span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
}
