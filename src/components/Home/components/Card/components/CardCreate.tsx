import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { CARD } from "../../../../../utils";
import { type cardCreateProps, cardCreateSchema } from "./schemas";
import { cardCreateSubmit } from "./functions";
import * as S from "../../../../Styleds";
import Modal from "../../../../Modal";

export default function CardCreate(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<cardCreateProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(cardCreateSchema),
    defaultValues: {
      userData: {
        card_number: "",
        card_type: "",
        cardholder_name: "",
        cvv: "",
        expiration_date: "",
        password: "",
      },
    },
  });

  const onSubmit = async (data: cardCreateProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await cardCreateSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      setIsLoading(false);
      navigate(CARD);
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
        Create Your Card
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        {errors.userData?.cardholder_name?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.cardholder_name?.message}
          </span>
        )}
        <S.InputField
          type="text"
          placeholder="Cardholder Name"
          pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:\s[a-zA-ZÀ-ÖØ-öø-ÿ]+)*$"
          {...register("userData.cardholder_name")}
        />
        <div className="flex gap-7">
          <div className="flex w-[100%] flex-col">
            {errors.userData?.card_number?.message != null && (
              <span className="text-error text-left">
                {errors.userData?.card_number?.message}
              </span>
            )}
            <S.InputField
              type="text"
              placeholder="Card Number"
              pattern="^[0-9]+$"
              {...register("userData.card_number")}
            />
          </div>
          <div className="flex w-[100%] flex-col">
            {errors.userData?.cvv?.message != null && (
              <span className="text-error text-left">
                {errors.userData?.cvv?.message}
              </span>
            )}
            <S.InputField
              type="text"
              placeholder="CVV"
              pattern="^[0-9]+$"
              {...register("userData.cvv")}
            />
          </div>
        </div>
        {errors.userData?.expiration_date?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.expiration_date?.message}
          </span>
        )}
        <S.InputField
          type="text"
          placeholder="Expiration Date (mm/yy)"
          pattern="^(0[1-9]|1[0-2])/(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])$"
          {...register("userData.expiration_date")}
        />
        <div className="flex gap-7">
          <div className="flex w-[100%] flex-col">
            {errors.userData?.password?.message != null && (
              <span className="text-error text-left">
                {errors.userData?.password?.message}
              </span>
            )}
            <S.InputField
              type="password"
              placeholder="Password"
              pattern="^[0-9]+$"
              {...register("userData.password")}
            />
          </div>
          <div className="flex w-[100%] flex-col">
            {errors.userData?.card_type?.message != null && (
              <span className="text-error text-left">
                {errors.userData?.card_type?.message}
              </span>
            )}
            <S.InputField
              type="text"
              placeholder="Card Type"
              pattern="^(credit|debit|Credit|Debit)$"
              {...register("userData.card_type")}
            />
          </div>
        </div>
        <S.Button type="submit" disabled={!!isLoading}>
          {isLoading ? "Creating..." : "Create"}
        </S.Button>
      </div>
    </S.FormWrapper >
  );
}

