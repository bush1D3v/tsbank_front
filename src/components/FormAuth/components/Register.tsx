import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { type registerProps, schemaRegisterForm } from "./schemas";
import { registerSubmit } from "./functions";
import * as S from "../../Styleds";
import Modal from "../../Modal";

export default function Register(): ReactElement {
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
    const result = await registerSubmit(data);

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
      data-testid="Register"
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
        data-testid="RegisterSubtitle"
      >
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
          data-testid="NameRegister"
          maxLength={50}
          pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:\s[a-zA-ZÀ-ÖØ-öø-ÿ]+)*$"
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
          maxLength={70}
          data-testid="EmailRegister"
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
              pattern="^[0-9]+$"
              maxLength={11}
              data-testid="CpfRegister"
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
              pattern="^[0-9]+$"
              maxLength={11}
              data-testid="PhoneRegister"
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
          maxLength={16}
          data-testid="PasswordRegister"
          {...register("userData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="ButtonRegister">
          {isLoading ? "Creating..." : "Create Account"}
        </S.Button>
      </div>
      <span className="text-lg" data-testid="SpanRegister">
        Already have an account? <Link to={VITE_REACT_APP_LOGIN}><u className="hover:text-darkBlue transition-colors">Sign in</u></Link>
      </span>
    </S.FormWrapper>
  );
}
