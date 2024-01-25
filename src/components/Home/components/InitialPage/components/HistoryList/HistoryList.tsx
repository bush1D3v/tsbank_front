import { type ReactElement, useState } from "react";
import { HistoryData } from "../../../functions";
import { createHash } from "../../../../../../functions";
import { useNavigate } from "react-router-dom";
import { LoadMoreButton } from "./components";

interface HistoryListProps {
  historyData: HistoryData[];
}

export default function HistoryList({ historyData }: HistoryListProps): ReactElement {
  const [ visibleTransactions, setVisibleTransactions ] = useState(10);
  const [ loading, setLoading ] = useState(false);

  const loadMore = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleTransactions((prevVisibleTransactions) => prevVisibleTransactions + 10);
      setLoading(false);
    }, 1000);
  };

  const navigation = useNavigate();

  const navigate = (to: string) => {
    navigation(to);
  };

  return (
    <ul className="py-1 pl-[18px] pr-1 flex flex-col gap-4 md:gap-6 lg:gap-4 w-full max-h-[18dvh] md:max-h-[19dvh]
      overflow-y-scroll lg:w-3/5 xl:w-2/4 animate-fade-down animate-duration-500 animate-ease-in-out"
      data-testid="HistoryList">
      {[ ...historyData ].reverse().slice(0, visibleTransactions).map((history, index) => (
        <>
          <li className="relative text-center flex gap-2 md:gap-4 justify-center items-center
          bg-saturatedBlue rounded-2xl p-4 md:text-xl lg:text-2xl cursor-pointer border-2
          hover:bg-darkBlue border-darkBlue transition-all delay-75 ease-in-out"
            data-testid="HistoryListItem"
            key={index}
            onClick={
              () => navigate(`/transaction/${createHash(history.id.toString())}`)
            }>
            <p className="font-bold capitalize">
              {history.description}
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              {history.date}
            </p>
            <span className="absolute pr-2 right-0 text-whiteBlue text-lg md:text-xl
            group-hover:text-desaturatedBlue transition-all delay-75 ease-in-out"
              data-testid="HistoryListArrowSpan">
              &gt;
            </span>
          </li>
        </>
      ))}
      {visibleTransactions < historyData.length && (
        <LoadMoreButton loading={loading} onclick={loadMore} />
      )}
    </ul>
  );
}
