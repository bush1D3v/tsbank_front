import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { type cardUpdateProps, cardUpdateSchema } from "./schemas";
import { cardUpdateSubmit } from "./functions";
import * as S from "../../../../Styleds";
import Modal from "../../../../Modal";

export default function CardUpdate(): ReactElement {
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
  } = useForm<cardUpdateProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(cardUpdateSchema),
    defaultValues: {
      cardData: {
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
      navigate(VITE_REACT_APP_CARD);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="CardUpdate"
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
        data-testid="CardUpdateSubtitle"
      >
        Update Card Password
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        {errors.cardData?.card_type?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.cardData?.card_type?.message}
          </span>
        )}
        <S.InputField
          type="text"
          placeholder="Card Type"
          pattern="^(credit|debit|Credit|Debit)$"
          maxLength={6}
          minLength={5}
          data-testid="CardUpdateType"
          {...register("cardData.card_type")}
        />
        {errors.cardData?.password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.cardData?.password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="Password"
          pattern="^[0-9]+$"
          maxLength={6}
          minLength={4}
          data-testid="CardUpdatePassword"
          {...register("cardData.password")}
        />
        {errors.cardData?.new_password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.cardData?.new_password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="New Password"
          pattern="^[0-9]+$"
          maxLength={6}
          minLength={4}
          data-testid="CardUpdateNewPassword"
          {...register("cardData.new_password")}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="CardUpdateButton">
          {isLoading ? "Updating..." : "Update"}
        </S.Button>
      </div>
    </S.FormWrapper >
  );
}
