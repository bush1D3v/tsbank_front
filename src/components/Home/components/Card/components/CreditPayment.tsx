import { useState, type ReactElement } from "react";
import {
  type UseFormHandleSubmit,
  type UseFormTrigger,
  type UseFormRegister,
  type FormState,
  useForm
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { balanceStringify, jsonUserParser } from "@/functions";
import { type creditPaymentProps, creditPaymentSchema } from "./schemas";
import { creditPaymentSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { CARD } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function CreditPayment(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<creditPaymentProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(creditPaymentSchema),
    defaultValues: {
      cardData: {
        password: "",
        value: ""
      },
    },
  });

  const onSubmit = async (data: creditPaymentProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await creditPaymentSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      const { user, token } = jsonUserParser(sessionStorage.getItem("userData"));
      balanceStringify({
        token,
        actualBalance: user.balance,
        inputBalance: data.cardData.value,
        arithmeticOperator: "-"
      });
      setIsLoading(false);
      navigate(CARD);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="CreditPayment"
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
        data-testid="CreditPaymentSubtitle"
      >
        Credit Payment
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<creditPaymentProps>,
            register: register as UseFormRegister<creditPaymentProps>,
            formState: formState as FormState<creditPaymentProps>,
            trigger: trigger as UseFormTrigger<creditPaymentProps>
          }}
          data-testid="CreditPaymentPassword"
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
            handleSubmit: handleSubmit as UseFormHandleSubmit<creditPaymentProps>,
            register: register as UseFormRegister<creditPaymentProps>,
            formState: formState as FormState<creditPaymentProps>,
            trigger: trigger as UseFormTrigger<creditPaymentProps>
          }}
          data-testid="CreditPaymentValue"
          autoComplete="transaction-amount"
          type="text"
          minLength={1}
          pattern="^[0-9]+$"
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="CreditPaymentButton">
          {isLoading ? "Paying..." : "Pay"}
        </S.Button>
      </div>
    </S.FormWrapper >
  );
}
