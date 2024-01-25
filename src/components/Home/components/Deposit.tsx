import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { depositSubmit } from "./functions";
import { type depositProps, depositSchema } from "./schemas";
import { balanceStringify, jsonUserParser } from "../../../functions";
import * as S from "../../Styleds";
import Modal from "../../Modal";

export default function Deposit(): ReactElement {
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
      navigate(VITE_REACT_APP_HOME);
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
        {errors.transactionData?.email?.message != null && (
          <span className="text-error -mb-7 -mt-5 text-left">
            {errors.transactionData?.email?.message}
          </span>
        )}
        <S.InputField
          type="email"
          placeholder="Email"
          data-testid="DepositEmail"
          {...register("transactionData.email")}
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
          data-testid="DepositValue"
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
          data-testid="DepositPassword"
          {...register("transactionData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="DepositButton">
          {isLoading ? "Depositing..." : "Deposit"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
