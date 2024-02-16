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
import { depositSubmit } from "./functions";
import { type depositProps, depositSchema } from "./schemas";
import { balanceStringify, jsonUserParser } from "@/functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { HOME } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function Deposit(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<depositProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(depositSchema),
    defaultValues: {
      transactionData: {
        email: "",
        password: "",
        value: ""
      },
    },
  });

  const onSubmit = async (data: depositProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await depositSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      const { user, token } = jsonUserParser(sessionStorage.getItem("userData"));
      if (data.transactionData.email === user.email) {
        balanceStringify({
          token,
          actualBalance: user.balance,
          inputBalance: data.transactionData.value,
          arithmeticOperator: "+"
        });
      }
      setIsLoading(false);
      navigate(HOME);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="Deposit"
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
        data-testid="DepositSubtitle"
      >
        Insert Deposit
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Email"
          inputLabel="email"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<depositProps>,
            register: register as UseFormRegister<depositProps>,
            formState: formState as FormState<depositProps>,
            trigger: trigger as UseFormTrigger<depositProps>
          }}
          data-testid="DepositEmail"
          type="email"
          autoComplete="email"
          maxLength={75}
        />
        <FormInput
          placeholder="Value"
          inputLabel="value"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<depositProps>,
            register: register as UseFormRegister<depositProps>,
            formState: formState as FormState<depositProps>,
            trigger: trigger as UseFormTrigger<depositProps>
          }}
          type="text"
          minLength={1}
          autoComplete="transaction-amount"
          pattern="^[\d.]+$"
          data-testid="DepositValue"
        />
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<depositProps>,
            register: register as UseFormRegister<depositProps>,
            formState: formState as FormState<depositProps>,
            trigger: trigger as UseFormTrigger<depositProps>
          }}
          data-testid="DepositPassword"
          autoComplete="current-password"
          type="password"
          maxLength={16}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="DepositButton">
          {isLoading ? "Depositing..." : "Deposit"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
