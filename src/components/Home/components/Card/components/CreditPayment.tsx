import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { balanceStringify, jsonUserParser } from "../../../../../functions";
import { type creditPaymentProps, creditPaymentSchema } from "./schemas";
import { creditPaymentSubmit } from "./functions";
import * as S from "../../../../Styleds";
import Modal from "../../../../Modal";

export default function CreditPayment(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const {
    VITE_REACT_APP_CARD
  } = import.meta.env;

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
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
      navigate(VITE_REACT_APP_CARD);
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
        {errors.cardData?.password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.cardData?.password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="Password"
          data-testid="CreditPaymentPassword"
          {...register("cardData.password")}
        />
        {errors.cardData?.value?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.cardData?.value?.message}
          </span>
        )}
        <S.InputField
          type="text"
          pattern="\d+([,.]\d{0,2})?"
          placeholder="Value"
          data-testid="CreditPaymentValue"
          {...register("cardData.value", {
            setValueAs: (value) => {
              return value.replace(/,/g, ".");
            },
          })}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="CreditPaymentButton">
          {isLoading ? "Paying..." : "Pay"}
        </S.Button>
      </div>
    </S.FormWrapper >
  );
}
