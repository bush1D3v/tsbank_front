import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { type changePhoneProps, changePhoneSchema } from "./schemas";
import { changePhoneSubmit } from "./functions";
import * as S from "../../../../Styleds";
import Modal from "../../../../Modal";

export default function ChangePhone(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const {
    VITE_REACT_APP_PROFILE
  } = import.meta.env;

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<changePhoneProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(changePhoneSchema),
    defaultValues: {
      userData: {
        password: "",
        new_phone: "",
      },
    },
  });

  const onSubmit = async (data: changePhoneProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await changePhoneSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      setIsLoading(false);
      navigate(VITE_REACT_APP_PROFILE);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="ChangePhone"
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
        data-testid="ChangePhoneSubtitle"
      >
        Change Your Phone
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        {errors.userData?.new_phone?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.new_phone?.message}
          </span>
        )}
        <S.InputField
          type="tel"
          placeholder="New Phone"
          maxLength={11}
          data-testid="ChangePhoneNewPhone"
          {...register("userData.new_phone")}
        />
        {errors.userData?.password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="Password"
          maxLength={16}
          data-testid="ChangePhonePassword"
          {...register("userData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="ChangePhoneButton">
          {isLoading ? "Changing..." : "Change"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
