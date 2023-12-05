import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { LOGIN } from "../../../../../utils";
import { type editAllAccInfoProps, editAllAccInfoSchema } from "./schemas";
import { editAllAccInfSubmit } from "./functions";
import * as S from "../../../../Styleds";
import Modal from "../../../../Modal";

export default function EditAllAccInfo(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const navigate = useNavigate();

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
    const result = await editAllAccInfSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      setIsLoading(false);
      navigate(LOGIN);
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
          {...register("userData.new_email")}
        />
        <div className="flex gap-7">
          <div className="flex w-[100%] flex-col">
            {errors.userData?.new_password?.message != null && (
              <span className="text-error -mb-7 -mt-2 text-left">
                {errors.userData?.new_password?.message}
              </span>
            )}
            <S.InputField
              type="password"
              placeholder="New Password"
              {...register("userData.new_password")}
            />
          </div>
          <div className="flex w-[100%] flex-col">
            {errors.userData?.new_phone?.message != null && (
              <span className="text-error -mb-7 -mt-2 text-left">
                {errors.userData?.new_phone?.message}
              </span>
            )}
            <S.InputField
              type="tel"
              placeholder="New Phone"
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
          {...register("userData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading}>
          {isLoading ? "Changing..." : "Change"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
