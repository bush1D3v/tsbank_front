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
import { type deleteAccProps, deleteAccSchema } from "./schemas";
import { deleteAccSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { REGISTER } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function DeleteAcc(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<deleteAccProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(deleteAccSchema),
    defaultValues: {
      userData: {
        password: "",
      },
    },
  });

  const onSubmit = async (data: deleteAccProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await deleteAccSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      setIsLoading(false);
      navigate(REGISTER);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="DeleteAcc"
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
        data-testid="DeleteAccSubtitle"
      >
        Delete Your Account
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<deleteAccProps>,
            register: register as UseFormRegister<deleteAccProps>,
            formState: formState as FormState<deleteAccProps>,
            trigger: trigger as UseFormTrigger<deleteAccProps>
          }}
          data-testid="DeleteAccPassword"
          autoComplete="current-password"
          type="password"
          maxLength={16}
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="DeleteAccButton">
          {isLoading ? "Deleting..." : "Delete"}
        </S.Button>
      </div>
    </S.FormWrapper>
  );
}
