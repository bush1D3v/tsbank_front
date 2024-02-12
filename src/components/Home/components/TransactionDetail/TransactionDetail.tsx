import Loading from "@/components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { decryptHash } from "@/functions";
import {
  transactionDetailSubmit,
  type SummaryResponseProps,
  type SummaryData
} from "../functions";
import {
  useEffect,
  type ReactElement,
  useState
} from "react";
import { TransactionModal } from "./components";

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
            <div
              className="flex flex-col items-center justify-center animate-fade duration-500"
              data-testid="TransactionDetailDivision"
            >
              <h1
                className="text-xl md:text-2xl lg:text-3xl font-bold mb-14"
                data-testid="TransactionDetailTitle"
              >
                TRANSACTION DETAILS
              </h1>
              <TransactionModal
                transactionData={transactionData}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}
