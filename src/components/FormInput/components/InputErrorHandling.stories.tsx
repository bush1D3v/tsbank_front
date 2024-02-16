import {
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormTrigger,
  type FormState,
  useForm
} from "react-hook-form";
import { InputErrorHandling } from "./InputErrorHandling";
import { type Meta } from "@storybook/react";
import FormInput from "../FormInput";
import loginSubmit from "@/components/FormAuth/components/functions/loginSubmit";
import { zodResolver } from "@hookform/resolvers/zod";
import { type loginProps, schemaLoginForm } from "@/components/FormAuth/components/schemas";
import { useState } from "react";
import * as S from "@/components/Styleds";

const meta: Meta<typeof InputErrorHandling> = {
  title: "Components/FormInput/InputErrorHandling",
  component: InputErrorHandling,
};

export default meta;

export const Default = () => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const [ isSuccess, setIsSuccess ] = useState<boolean>(true);

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
      setIsLoading(false);
      setIsSuccess(!isSuccess);
      setIsModalOpen(!isModalOpen);
    }

    if (result.success && result.userData !== undefined) {
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("userData", JSON.stringify(result.userData));
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex items-center justify-center flex-col h-[100dvh] lg:p-60"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2
        className="font-bold text-2xl lg:text-3xl xl:text-4xl pt-10 -mb-2 text-center">
        CLICK THE BUTTON TO SEE THE EFFECT
      </h2>
      <div className="flex py-7 gap-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            formState: formState as FormState<loginProps>,
            handleSubmit: handleSubmit as UseFormHandleSubmit<loginProps>,
            register: register as UseFormRegister<loginProps>,
            trigger: trigger as UseFormTrigger<loginProps>
          }}
          type="password"
          autoComplete="current-password"
          maxLength={16}
        />
        <S.Button type="submit" disabled={!!isLoading}>
          CLICK ME
        </S.Button>
      </div>
    </form>
  );
};
