import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { CARD } from "../../../../../utils";
import { type cardUpdateProps, cardUpdateSchema } from "./schemas";
import { cardUpdateSubmit } from "./functions";
import * as S from "../../../../Styleds";
import Modal from "../../../../Modal";

export default function CardUpdate(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<cardUpdateProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(cardUpdateSchema),
    defaultValues: {
      userData: {
        new_password: "",
        password: "",
        card_type: ""
      },
    },
  });

  const onSubmit = async (data: cardUpdateProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await cardUpdateSubmit(data);

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
        Update Card Password
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        {errors.userData?.card_type?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.card_type?.message}
          </span>
        )}
        <S.InputField
          type="text"
          placeholder="Card Type"
          pattern="^(credit|debit|Credit|Debit)$"
          {...register("userData.card_type")}
        />
        {errors.userData?.password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="Password"
          pattern="^[0-9]+$"
          {...register("userData.password")}
        />
        {errors.userData?.new_password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.new_password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="New Password"
          pattern="^[0-9]+$"
          {...register("userData.new_password")}
        />
        <S.Button type="submit" disabled={!!isLoading}>
          {isLoading ? "Updating..." : "Update"}
        </S.Button>
      </div>
    </S.FormWrapper >
  );
}
