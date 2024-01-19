import Loading from "../../Loading";
import { useNavigate, useParams } from "react-router-dom";
import { balanceFormat, decryptHash } from "../../../functions";
import {
  transactionDetailSubmit,
  type SummaryResponseProps,
  type SummaryData
} from "./functions";
import {
  useEffect,
  type ReactElement,
  useState
} from "react";

/* Interface criada para exibir dados na documentação Storybook,
sem forçar um valor aleatório diretamente no componente */
interface TransactionDetailStorybookProps {
  fakeData?: SummaryData
}

export default function TransactionDetail({ fakeData }: TransactionDetailStorybookProps): ReactElement {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ transactionData, setTransactionData ] = useState<SummaryData>();

  const {
    VITE_REACT_APP_HOME
  } = import.meta.env;

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof id === "string") {
          const response: SummaryResponseProps = await transactionDetailSubmit(decryptHash(id));
          if (typeof response.message !== "string" && (response.message.input || response.message.output)) {
            navigate(VITE_REACT_APP_HOME);
          }
          setTransactionData(response.message as SummaryData);
        } else if (fakeData !== undefined) {
          setTransactionData(fakeData as SummaryData);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [ id, fakeData, navigate, VITE_REACT_APP_HOME ]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {typeof transactionData === "string" ? (
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">{transactionData}</p>
          ) : (
            <article className="flex flex-col gap-4 justify-center items-center text-xl
            font-bold animate-fade-down animate-ease-in-out animate-500">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-14">TRANSACTION DETAILS</h1>
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
                <p>
                  {transactionData?.date}
                </p>
              </div>
            </article>
          )}
        </>
      )}
    </>
  );
}
