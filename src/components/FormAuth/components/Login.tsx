import {
  useState,
  type ReactElement,
  useContext
} from "react";
import {
  type UseFormRegister,
  type UseFormHandleSubmit,
  type UseFormTrigger,
  type FormState,
  useForm
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { type loginProps, schemaLoginForm } from "./schemas";
import { loginSubmit } from "./functions";
import { UserDataContext } from "@/contexts";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import FormInput from "@/components/FormInput";
import { REGISTER, HOME } from "@/utils/routerPaths";

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
    formState,
    trigger
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
      sessionStorage.setItem("userData", JSON.stringify(result.userData));
      setIsUserLoggedIn(true);
      setIsLoading(false);
      navigate(HOME);
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
        className="font-bold text-2xl lg:text-3xl xl:text-4xl pt-10 -mb-2"
        data-testid="SubtitleLogin"
      >
        Sign in
      </h2>
      <div className="flex py-7 gap-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Email"
          inputLabel="email"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<loginProps>,
            register: register as UseFormRegister<loginProps>,
            formState: formState as FormState<loginProps>,
            trigger: trigger as UseFormTrigger<loginProps>
          }}
          data-testid="EmailLogin"
          type="email"
          autoComplete="email"
          maxLength={75}
        />
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<loginProps>,
            register: register as UseFormRegister<loginProps>,
            formState: formState as FormState<loginProps>,
            trigger: trigger as UseFormTrigger<loginProps>
          }}
          data-testid="PasswordLogin"
          type="password"
          autoComplete="current-password"
          maxLength={16}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="ButtonLogin">
          {isLoading ? "Logging in..." : "Login"}
        </S.Button>
      </div>
      <span className="text-lg" data-testid="SpanLogin">
        Don't have an account? <Link to={REGISTER}><u className="hover:text-darkBlue transition-colors">Sign up</u></Link>
      </span>
    </S.FormWrapper>
  );
}
