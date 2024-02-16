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
import { type changeEmailProps, changeEmailSchema } from "./schemas";
import { changeEmailSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { PROFILE } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function ChangeEmail(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<changeEmailProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(changeEmailSchema),
    defaultValues: {
      userData: {
        password: "",
        new_email: "",
      },
    },
  });

  const onSubmit = async (data: changeEmailProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await changeEmailSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      setIsLoading(false);
      navigate(PROFILE);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="ChangeEmail"
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
        data-testid="ChangeEmailSubtitle"
      >
        Change Your Email
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="New Email"
          inputLabel="new_email"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<changeEmailProps>,
            register: register as UseFormRegister<changeEmailProps>,
            formState: formState as FormState<changeEmailProps>,
            trigger: trigger as UseFormTrigger<changeEmailProps>
          }}
          data-testid="ChangeEmailNewEmail"
          autoComplete="email"
          type="email"
          maxLength={75}
        />
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<changeEmailProps>,
            register: register as UseFormRegister<changeEmailProps>,
            formState: formState as FormState<changeEmailProps>,
            trigger: trigger as UseFormTrigger<changeEmailProps>
          }}
          data-testid="ChangeEmailPassword"
          autoComplete="current-password"
          type="password"
          maxLength={16}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="ChangeEmailButton">
          {isLoading ? "Changing..." : "Change"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
