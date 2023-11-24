import { useState, type ReactElement, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { HOME, REGISTER } from "../../../utils/routePaths";
import { type loginProps, schemaLoginForm } from "./schemas";
import { handleLoginSubmit } from "./functions";
import { UserDataContext } from "../../../contexts/userData";
import * as S from "./styleds";
import Modal from "../../Modal";

export default function Login(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const { setUserData, setIsUserLoggedIn } = useContext(UserDataContext);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ isSuccess, setIsSuccess ] = useState<boolean>(true);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(schemaLoginForm),
    defaultValues: {
      userData: {
        email: "",
        password: "",
      },
    },
  });

  const onSubmit = async (data: loginProps): Promise<void> => {
    setIsLoading(!isLoading);

    const result = await handleLoginSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsSuccess(!isSuccess);
      setIsModalOpen(!isModalOpen);
    }

    if (result.success && result.user !== undefined) {
      setUserData(result.user);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("l_storage.user_info", JSON.stringify(result.user));
      setIsUserLoggedIn(true);

      setIsLoading(false);

      navigate(HOME);
    }
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Modal
        isOpen={isModalOpen}
        setOpen={setIsModalOpen}
        title="Something went wrong!"
        description={error}
        btnMessage="Try again"
      />
      <h2 className="font-bold text-2xl lg:text-3xl xl:text-4xl pt-10">
        Sign in
      </h2>
      <div className="flex py-7 gap-7 flex-col w-11/12 lg:w-3/4">
        {errors.userData?.email?.message != null && (
          <span className="text-error -mb-7 text-left -mt-5">
            {errors.userData?.email?.message}
          </span>
        )}
        <S.InputField
          type="email"
          placeholder="Email"
          {...register("userData.email")}
        />
        {errors.userData?.password?.message != null && (
          <span className="text-error -mb-7 -mt-3 text-left">
            {errors.userData?.password?.message}
          </span>
        )}
        <S.InputField
          type="password"
          placeholder="Password"
          {...register("userData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </S.Button>
      </div>
      <span className="my-8 underline text-lg hover:text-darkBlue transition-colors ">
        <Link to={REGISTER}>Don't have an account? Create one here.</Link>
      </span>
    </S.FormWrapper>
  );
}
