import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { type editAllAccInfoProps, editAllAccInfoSchema } from "./schemas";
import { editAllAccInfoSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";

export default function EditAllAccInfo(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    VITE_REACT_APP_LOGIN
  } = import.meta.env;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<editAllAccInfoProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(editAllAccInfoSchema),
    defaultValues: {
      userData: {
        password: "",
        new_phone: "",
        new_email: "",
        new_password: "",
      },
    },
  });

  const onSubmit = async (data: editAllAccInfoProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await editAllAccInfoSubmit(data);

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
      data-testid="EditAllAccInfo"
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
        data-testid="EditAllAccInfoSubtitle"
      >
        Edit All Info
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        {errors.userData?.new_email?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.new_email?.message}
          </span>
        )}
        <S.InputField
          type="email"
          placeholder="New Email"
          maxLength={70}
          data-testid="EditAllAccInfoNewEmail"
          {...register("userData.new_email")}
        />
        <div className="flex gap-7">
          <div className="flex w-[100%] flex-col">
            {errors.userData?.new_password?.message != null && (
              <span className="text-error text-left">
                {errors.userData?.new_password?.message}
              </span>
            )}
            <S.InputField
              type="password"
              placeholder="New Password"
              maxLength={16}
              data-testid="EditAllAccInfoNewPassword"
              {...register("userData.new_password")}
            />
          </div>
          <div className="flex w-[100%] flex-col">
            {errors.userData?.new_phone?.message != null && (
              <span className="text-error text-left">
                {errors.userData?.new_phone?.message}
              </span>
            )}
            <S.InputField
              type="tel"
              placeholder="New Phone"
              maxLength={11}
              data-testid="EditAllAccInfoNewPhone"
              {...register("userData.new_phone")}
            />
          </div>
        </div>
        {errors.userData?.password?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="Password"
          maxLength={16}
          data-testid="EditAllAccInfoPassword"
          {...register("userData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="EditAllAccInfoButton">
          {isLoading ? "Changing..." : "Change"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
