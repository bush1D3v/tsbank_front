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
import { type changePhoneProps, changePhoneSchema } from "./schemas";
import { changePhoneSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { PROFILE } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function ChangePhone(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<changePhoneProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(changePhoneSchema),
    defaultValues: {
      userData: {
        password: "",
        new_phone: "",
      },
    },
  });

  const onSubmit = async (data: changePhoneProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await changePhoneSubmit(data);

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
      data-testid="ChangePhone"
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
        data-testid="ChangePhoneSubtitle"
      >
        Change Your Phone
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="New Phone"
          inputLabel="new_phone"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<changePhoneProps>,
            register: register as UseFormRegister<changePhoneProps>,
            formState: formState as FormState<changePhoneProps>,
            trigger: trigger as UseFormTrigger<changePhoneProps>
          }}
          data-testid="ChangePhoneNewPhone"
          autoComplete="tel"
          type="tel"
          maxLength={11}
        />
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<changePhoneProps>,
            register: register as UseFormRegister<changePhoneProps>,
            formState: formState as FormState<changePhoneProps>,
            trigger: trigger as UseFormTrigger<changePhoneProps>
          }}
          data-testid="ChangePhonePassword"
          autoComplete="current-password"
          type="password"
          maxLength={16}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="ChangePhoneButton">
          {isLoading ? "Changing..." : "Change"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
