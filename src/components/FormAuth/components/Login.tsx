import { useState, type ReactElement, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { type loginProps, schemaLoginForm } from "./schemas";
import { loginSubmit } from "./functions";
import { UserDataContext } from "../../../contexts";
import * as S from "../../Styleds";
import Modal from "../../Modal";

export default function Login(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const { setUserData, setIsUserLoggedIn } = useContext(UserDataContext);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ isSuccess, setIsSuccess ] = useState<boolean>(true);

  const {
    VITE_REACT_APP_REGISTER,
    VITE_REACT_APP_HOME
  } = import.meta.env;

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

    const result = await loginSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsSuccess(!isSuccess);
      setIsModalOpen(!isModalOpen);
    }

    if (result.success && result.userData !== undefined) {
      setUserData(result.userData.user);
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userData", JSON.stringify(result.userData.user));
      setIsUserLoggedIn(true);

      setIsLoading(false);

      navigate(VITE_REACT_APP_HOME);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="Login"
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
        data-testid="SubtitleLogin"
      >
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
          data-testid="EmailLogin"
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
          data-testid="PasswordLogin"
          {...register("userData.password")}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="ButtonLogin">
          {isLoading ? "Logging in..." : "Login"}
        </S.Button>
      </div>
      <span className="text-lg" data-testid="SpanLogin">
        Don't have an account? <Link to={VITE_REACT_APP_REGISTER}><u className="hover:text-darkBlue transition-colors">Sign up</u></Link>
      </span>
    </S.FormWrapper>
  );
}
