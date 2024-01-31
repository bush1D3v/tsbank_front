import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { type changePasswordProps, changePasswordSchema } from "./schemas";
import { changePasswordSubmit } from "./functions";
import * as S from "../../../../Styleds";
import Modal from "../../../../Modal";

export default function ChangePassword(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const {
    VITE_REACT_APP_LOGIN
  } = import.meta.env;

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<changePasswordProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      userData: {
        password: "",
        new_password: "",
      },
    },
  });

  const onSubmit = async (data: changePasswordProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await changePasswordSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      setIsLoading(false);
      navigate(VITE_REACT_APP_LOGIN);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="ChangePassword"
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
        data-testid="ChangePasswordSubtitle"
      >
        Change Your Password
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        {errors.userData?.new_password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.new_password?.message}
          </span>
        )}
        <S.InputField
          type="text"
          placeholder="New Password"
          maxLength={16}
          data-testid="ChangePasswordNewPassword"
          {...register("userData.new_password")}
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
          data-testid="ChangePasswordPassword"
          {...register("userData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="ChangePasswordButton">
          {isLoading ? "Changing..." : "Change"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
