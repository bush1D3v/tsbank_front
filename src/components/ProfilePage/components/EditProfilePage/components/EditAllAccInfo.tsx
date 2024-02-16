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
import { type editAllAccInfoProps, editAllAccInfoSchema } from "./schemas";
import { editAllAccInfoSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { LOGIN } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function EditAllAccInfo(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
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
    const result = await editAllAccInfoSubmit(data);

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
      data-testid="EditAllAccInfo"
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
        data-testid="EditAllAccInfoSubtitle"
      >
        Edit All Info
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="New Email"
          inputLabel="new_email"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<editAllAccInfoProps>,
            register: register as UseFormRegister<editAllAccInfoProps>,
            formState: formState as FormState<editAllAccInfoProps>,
            trigger: trigger as UseFormTrigger<editAllAccInfoProps>
          }}
          data-testid="EditAllAccInfoNewEmail"
          type="email"
          autoComplete="email"
          maxLength={75}
        />
        <div className="flex gap-7">
          <div className="flex w-[100%] flex-col">
            <FormInput
              placeholder="New Password"
              inputLabel="new_password"
              formMethods={{
                handleSubmit: handleSubmit as UseFormHandleSubmit<editAllAccInfoProps>,
                register: register as UseFormRegister<editAllAccInfoProps>,
                formState: formState as FormState<editAllAccInfoProps>,
                trigger: trigger as UseFormTrigger<editAllAccInfoProps>
              }}
              data-testid="EditAllAccInfoNewPassword"
              autoComplete="new-password"
              type="password"
              maxLength={16}
            />
          </div>
          <div className="flex w-[100%] flex-col">
            <FormInput
              placeholder="New Phone"
              inputLabel="new_phone"
              formMethods={{
                handleSubmit: handleSubmit as UseFormHandleSubmit<editAllAccInfoProps>,
                register: register as UseFormRegister<editAllAccInfoProps>,
                formState: formState as FormState<editAllAccInfoProps>,
                trigger: trigger as UseFormTrigger<editAllAccInfoProps>
              }}
              data-testid="EditAllAccInfoNewPhone"
              type="tel"
              pattern="^[0-9]+$"
              maxLength={11}
            />
          </div>
        </div>
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<editAllAccInfoProps>,
            register: register as UseFormRegister<editAllAccInfoProps>,
            formState: formState as FormState<editAllAccInfoProps>,
            trigger: trigger as UseFormTrigger<editAllAccInfoProps>
          }}
          data-testid="EditAllAccInfoPassword"
          autoComplete="current-password"
          type="password"
          maxLength={16}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="EditAllAccInfoButton">
          {isLoading ? "Changing..." : "Change"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
