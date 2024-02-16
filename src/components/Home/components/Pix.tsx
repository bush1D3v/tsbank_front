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
import { pixSubmit } from "./functions";
import { type pixProps, pixSchema } from "./schemas";
import { balanceStringify, jsonUserParser } from "@/functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { HOME } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function Pix(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<pixProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(pixSchema),
    defaultValues: {
      transactionData: {
        password: "",
        cpf: "",
        value: ""
      },
    },
  });

  const onSubmit = async (data: pixProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await pixSubmit(data);

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
      data-testid="Pix"
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
        data-testid="PixSubtitle"
      >
        Send Pix
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Cpf"
          inputLabel="cpf"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<pixProps>,
            register: register as UseFormRegister<pixProps>,
            formState: formState as FormState<pixProps>,
            trigger: trigger as UseFormTrigger<pixProps>
          }}
          type="text"
          maxLength={11}
          autoComplete="off"
          pattern="^[0-9]+$"
          data-testid="PixCpf"
        />
        <FormInput
          placeholder="Value"
          inputLabel="value"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<pixProps>,
            register: register as UseFormRegister<pixProps>,
            formState: formState as FormState<pixProps>,
            trigger: trigger as UseFormTrigger<pixProps>
          }}
          type="text"
          minLength={1}
          autoComplete="transaction-amount"
          pattern="^[\d.]+$"
          data-testid="PixValue"
        />
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<pixProps>,
            register: register as UseFormRegister<pixProps>,
            formState: formState as FormState<pixProps>,
            trigger: trigger as UseFormTrigger<pixProps>
          }}
          type="password"
          maxLength={16}
          autoComplete="current-password"
          data-testid="PixPassword"
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="PixButton">
          {isLoading ? "Sending..." : "Send"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
