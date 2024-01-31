import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { pixSubmit } from "./functions";
import { type pixProps, pixSchema } from "./schemas";
import { balanceStringify, jsonUserParser } from "../../../functions";
import * as S from "../../Styleds";
import Modal from "../../Modal";

export default function Pix(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const {
    VITE_REACT_APP_HOME
  } = import.meta.env;

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
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
      navigate(VITE_REACT_APP_HOME);
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
        {errors.transactionData?.cpf?.message != null && (
          <span className="text-error -mb-7 -mt-5 text-left">
            {errors.transactionData?.cpf?.message}
          </span>
        )}
        <S.InputField
          type="text"
          maxLength={11}
          placeholder="Cpf"
          data-testid="PixCpf"
          {...register("transactionData.cpf")}
        />
        {errors.transactionData?.value?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.transactionData?.value?.message}
          </span>
        )}
        <S.InputField
          type="text"
          pattern="\d+([,.]\d{0,2})?"
          placeholder="Value"
          data-testid="PixValue"
          {...register("transactionData.value", {
            setValueAs: (value) => {
              return value.replace(/,/g, ".");
            },
          })}
        />
        {errors.transactionData?.password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.transactionData?.password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="Password"
          maxLength={16}
          data-testid="PixPassword"
          {...register("transactionData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="PixButton">
          {isLoading ? "Sending..." : "Send"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
