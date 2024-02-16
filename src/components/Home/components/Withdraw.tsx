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
import { withdrawSubmit } from "./functions";
import { type withdrawProps, withdrawSchema } from "./schemas";
import { balanceStringify, jsonUserParser } from "@/functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { HOME } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function Withdraw(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<withdrawProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(withdrawSchema),
    defaultValues: {
      transactionData: {
        password: "",
        value: ""
      },
    },
  });

  const onSubmit = async (data: withdrawProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await withdrawSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      const { user, token } = jsonUserParser(sessionStorage.getItem("userData"));
      balanceStringify({
        token,
        actualBalance: user.balance,
        inputBalance: data.transactionData.value,
        arithmeticOperator: "-"
      });
      setIsLoading(false);
      navigate(HOME);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="Withdraw"
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
        data-testid="WithdrawSubtitle"
      >
        Make Withdraw
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Value"
          inputLabel="value"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<withdrawProps>,
            register: register as UseFormRegister<withdrawProps>,
            formState: formState as FormState<withdrawProps>,
            trigger: trigger as UseFormTrigger<withdrawProps>
          }}
          type="text"
          minLength={1}
          autoComplete="transaction-amount"
          pattern="^[\d.]+$"
          data-testid="WithdrawValue"
        />
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<withdrawProps>,
            register: register as UseFormRegister<withdrawProps>,
            formState: formState as FormState<withdrawProps>,
            trigger: trigger as UseFormTrigger<withdrawProps>
          }}
          maxLength={16}
          type="password"
          data-testid="WithdrawPassword"
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="WithdrawButton">
          {isLoading ? "Withdrawing..." : "Withdraw"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
