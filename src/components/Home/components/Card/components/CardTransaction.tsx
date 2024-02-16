import { useState, type ReactElement } from "react";
import {
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormTrigger,
  type FormState,
  useForm
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { balanceStringify, jsonUserParser } from "@/functions";
import { type cardTransactionProps, cardTransactionSchema } from "./schemas";
import { cardTransactionSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { CARD } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function CardTransaction(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<cardTransactionProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(cardTransactionSchema),
    defaultValues: {
      cardData: {
        password: "",
        card_type: "",
        value: ""
      },
    },
  });

  const onSubmit = async (data: cardTransactionProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await cardTransactionSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      const { user, token } = jsonUserParser(sessionStorage.getItem("userData"));
      if (data.cardData.card_type === "debit") {
        balanceStringify({
          token,
          actualBalance: user.balance,
          inputBalance: data.cardData.value,
          arithmeticOperator: "-"
        });
      }
      setIsLoading(false);
      navigate(CARD);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="CardTransaction"
    >
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        title="Something went wrong!"
        description={error}
        btnMessage="Try again"
      />
      <h2
        className="font-bold text-2xl lg:text-3xl xl:text-4xl pt-10"
        data-testid="CardTransactionSubtitle"
      >
        Card Transaction
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Card Type"
          inputLabel="card_type"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<cardTransactionProps>,
            register: register as UseFormRegister<cardTransactionProps>,
            formState: formState as FormState<cardTransactionProps>,
            trigger: trigger as UseFormTrigger<cardTransactionProps>
          }}
          data-testid="CardTransactionType"
          autoComplete="off"
          type="text"
          maxLength={6}
          minLength={5}
          pattern="^(credit|debit|Credit|Debit)$"
        />
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<cardTransactionProps>,
            register: register as UseFormRegister<cardTransactionProps>,
            formState: formState as FormState<cardTransactionProps>,
            trigger: trigger as UseFormTrigger<cardTransactionProps>
          }}
          data-testid="CardTransactionPassword"
          autoComplete="current-password"
          type="password"
          maxLength={6}
          minLength={4}
          pattern="^[0-9]+$"
        />
        <FormInput
          placeholder="Value"
          inputLabel="value"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<cardTransactionProps>,
            register: register as UseFormRegister<cardTransactionProps>,
            formState: formState as FormState<cardTransactionProps>,
            trigger: trigger as UseFormTrigger<cardTransactionProps>
          }}
          data-testid="CardTransactionValue"
          autoComplete="transaction-amount"
          type="text"
          minLength={1}
          pattern="^[0-9]+$"
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="CardTransactionButton">
          {isLoading ? "Making..." : "Make"}
        </S.Button>
      </div>
    </S.FormWrapper >
  );
}
