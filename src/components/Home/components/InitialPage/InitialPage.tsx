import Loading from "@/components/Loading";
import {
  useState,
  type ReactElement,
  useEffect
} from "react";
import {
  jsonUserParser,
  balanceFormat,
  errorReplace,
  balanceStringify,
} from "@/functions";
import {
  getHistory,
  type HistoryData,
  type HistoryResponseProps
} from "../functions";
import {
  BalanceDivision,
  HooksList,
  HistoryList
} from "./components";
import { detailUserSubmit } from "./functions";

export default function InitialPage(): ReactElement {
  const [ historyData, setHistoryData ] = useState<HistoryData[]>([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { user } = await detailUserSubmit();
      const { token } = jsonUserParser(sessionStorage.getItem("userData"));
      if (user) {
        balanceStringify({
          token: token,
          actualBalance: user.balance,
          inputBalance: "0",
          arithmeticOperator: "+"
        });
      }

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

    window.onbeforeunload = function () {
      sessionStorage.removeItem("historyData");
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

  const { user } = jsonUserParser(sessionStorage.getItem("userData"));

  const balance = balanceFormat(user.balance);

  return (
    <section
      className="flex flex-col items-center justify-center gap-8 md:gap-14 lg:w-7/12"
      data-testid="InitialPage"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-xl md:text-2xl lg:text-3l xl:text-4xl font-bold text-center
            animate-fade-down animate-duration-700 animate-ease-in-out"
            data-testid="InitialPageTitle">
            Hello <br /> {user.name}👋
          </h1>
          <BalanceDivision balance={balance} />
          <HooksList />
          <span
            className="md:-mt-8 -mb-6 md:-mb-12 text-lg md:text-xl lg:text-2xl font-bold
            animate-fade animate-duration-700 animate-ease-in-out"
            data-testid="InitialPageHistorySpan">
            &#x25BC; HISTORY &#x25BC;
          </span>
          {typeof historyData === "string" ? (
            <p className="px-4 text-center text-lg md:text-xl lg:text-2xl">
              {errorReplace(historyData)}
            </p>
          ) : (
            <HistoryList historyData={historyData} />
          )}
        </>
      )}
    </section>
  );
}
