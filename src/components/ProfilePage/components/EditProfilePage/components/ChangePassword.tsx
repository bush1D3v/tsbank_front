import { useState, type ReactElement } from "react";
import {
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormTrigger,
  type FormState,
  useForm
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { type changePasswordProps, changePasswordSchema } from "./schemas";
import { changePasswordSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { LOGIN } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function ChangePassword(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
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
      navigate(LOGIN);
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
        <FormInput
          placeholder="New Password"
          inputLabel="new_password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<changePasswordProps>,
            register: register as UseFormRegister<changePasswordProps>,
            formState: formState as FormState<changePasswordProps>,
            trigger: trigger as UseFormTrigger<changePasswordProps>
          }}
          data-testid="ChangePasswordNewPassword"
          autoComplete="new-password"
          type="password"
          maxLength={16}
        />
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<changePasswordProps>,
            register: register as UseFormRegister<changePasswordProps>,
            formState: formState as FormState<changePasswordProps>,
            trigger: trigger as UseFormTrigger<changePasswordProps>
          }}
          data-testid="ChangePasswordPassword"
          autoComplete="current-password"
          type="password"
          maxLength={16}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="ChangePasswordButton">
          {isLoading ? "Changing..." : "Change"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
