import { useState, type ReactElement } from "react";
import {
  type UseFormRegister,
  type UseFormHandleSubmit,
  type UseFormTrigger,
  type FormState,
  useForm
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { type registerProps, schemaRegisterForm } from "./schemas";
import { registerSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { LOGIN } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function Register(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
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
      navigate(LOGIN);
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
        <FormInput
          placeholder="Name"
          inputLabel="name"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<registerProps>,
            register: register as UseFormRegister<registerProps>,
            formState: formState as FormState<registerProps>,
            trigger: trigger as UseFormTrigger<registerProps>
          }}
          data-testid="NameRegister"
          type="text"
          autoComplete="name"
          pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:\s[a-zA-ZÀ-ÖØ-öø-ÿ]+)*$"
          maxLength={75}
        />
        <FormInput
          placeholder="Email"
          inputLabel="email"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<registerProps>,
            register: register as UseFormRegister<registerProps>,
            formState: formState as FormState<registerProps>,
            trigger: trigger as UseFormTrigger<registerProps>
          }}
          data-testid="EmailRegister"
          type="email"
          autoComplete="email"
          maxLength={75}
        />
        <div className="flex gap-7">
          <div className="flex w-[100%] gap-7 flex-col">
            <FormInput
              placeholder="Cpf"
              inputLabel="cpf"
              formMethods={{
                handleSubmit: handleSubmit as UseFormHandleSubmit<registerProps>,
                register: register as UseFormRegister<registerProps>,
                formState: formState as FormState<registerProps>,
                trigger: trigger as UseFormTrigger<registerProps>
              }}
              pattern="^[0-9]+$"
              data-testid="CpfRegister"
              autoComplete="off"
              type="text"
              maxLength={11}
            />
          </div>
          <div className="flex w-[100%] gap-7 flex-col">
            <FormInput
              placeholder="Phone"
              inputLabel="phone"
              formMethods={{
                handleSubmit: handleSubmit as UseFormHandleSubmit<registerProps>,
                register: register as UseFormRegister<registerProps>,
                formState: formState as FormState<registerProps>,
                trigger: trigger as UseFormTrigger<registerProps>
              }}
              pattern="^[0-9]+$"
              data-testid="PhoneRegister"
              autoComplete="tel"
              type="tel"
              maxLength={11}
            />
          </div>
        </div>
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<registerProps>,
            register: register as UseFormRegister<registerProps>,
            formState: formState as FormState<registerProps>,
            trigger: trigger as UseFormTrigger<registerProps>
          }}
          data-testid="PasswordRegister"
          autoComplete="password"
          type="password"
          maxLength={16}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="ButtonRegister">
          {isLoading ? "Creating..." : "Create Account"}
        </S.Button>
      </div>
      <span className="text-lg" data-testid="SpanRegister">
        Already have an account? <Link to={LOGIN}><u className="hover:text-darkBlue transition-colors">Sign in</u></Link>
      </span>
    </S.FormWrapper>
  );
}
