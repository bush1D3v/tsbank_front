import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { HOME } from "../../../utils";
import { withdrawSubmit } from "./functions";
import { type withdrawProps, withdrawSchema } from "./schemas";
import { balanceStringify, jsonUserParser } from "../../../functions";
import * as S from "../../Styleds";
import Modal from "../../Modal";

export default function Withdraw(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<withdrawProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(withdrawSchema),
    defaultValues: {
      userData: {
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
      const { user, token } = jsonUserParser(sessionStorage.getItem("userInfo"));
      balanceStringify({
        token,
        actualBalance: user.balance,
        inputBalance: data.userData.value,
        arithmeticOperator: "-"
      });
      setIsLoading(false);
      navigate(HOME);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
    >
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        title="Something went wrong!"
        description={error}
        btnMessage="Try again"
      />
      <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl pt-10">
        Make Withdraw
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        {errors.userData?.value?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.value?.message}
          </span>
        )}
        <S.InputField
          type="text"
          pattern="\d+([,.]\d{0,2})?"
          placeholder="Value"
          {...register("userData.value", {
            setValueAs: (value) => {
              return value.replace(/,/g, ".");
            },
          })}
        />
        {errors.userData?.password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="Password"
          {...register("userData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading}>
          {isLoading ? "Withdrawing..." : "Withdraw"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
