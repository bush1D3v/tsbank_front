import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { LOGIN } from "../../../utils/routePaths";
import { type registerProps, schemaRegisterForm } from "./schemas";
import { handleRegisterSubmit } from "./functions";
import * as S from "./styleds";
import Modal from "../../Modal";


export default function Register(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<registerProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(schemaRegisterForm),
    defaultValues: {
      userData: {
        name: "",
        email: "",
        password: "",
        cpf: "",
        phone: ""
      },
    },
  });

  const onSubmit = async (data: registerProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await handleRegisterSubmit(data);

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
        Sign up
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        {errors.userData?.name?.message != null && (
          <span className="text-error -mb-7 -mt-5 text-left">
            {errors.userData?.name?.message}
          </span>
        )}
        <S.InputField
          type="text"
          placeholder="Name"
          {...register("userData.name")}
        />
        {errors.userData?.email?.message != null && (
          <span className="text-error -mb-7 -mt-2 text-left">
            {errors.userData?.email?.message}
          </span>
        )}
        <S.InputField
          type="email"
          placeholder="Email"
          {...register("userData.email")}
        />
        <div className="flex gap-7">
          <div className="flex w-[100%] flex-col">
            {errors.userData?.cpf?.message != null && (
              <span className="text-error text-left">
                {errors.userData?.cpf?.message}
              </span>
            )}
            <S.InputField
              type="text"
              placeholder="Cpf"
              {...register("userData.cpf")}
            />
          </div>
          <div className="flex w-[100%] flex-col">
            {errors.userData?.phone?.message != null && (
              <span className="text-error text-left">
                {errors.userData?.phone?.message}
              </span>
            )}
            <S.InputField
              type="text"
              placeholder="Phone"
              {...register("userData.phone")}
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
          {isLoading ? "Creating..." : "Create Account"}
        </S.Button>
      </div>
      <span className="text-lg">
        Already have an account? <Link to={LOGIN}><u className="hover:text-darkBlue transition-colors">Sign in.</u></Link>
      </span>
    </S.FormWrapper>
  );
}
