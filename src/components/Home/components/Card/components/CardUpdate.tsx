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
import { type cardUpdateProps, cardUpdateSchema } from "./schemas";
import { cardUpdateSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { CARD } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function CardUpdate(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<cardUpdateProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(cardUpdateSchema),
    defaultValues: {
      cardData: {
        new_password: "",
        password: "",
        card_type: ""
      },
    },
  });

  const onSubmit = async (data: cardUpdateProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await cardUpdateSubmit(data);

    if (!result.success) {
      setError(result.message);
      setIsLoading(false);
      setIsModalOpen(!isModalOpen);
    } else {
      setIsLoading(false);
      navigate(CARD);
    }
  };

  return (
    <S.FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      data-testid="CardUpdate"
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
        data-testid="CardUpdateSubtitle"
      >
        Update Card Password
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Card Type"
          inputLabel="card_type"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<cardUpdateProps>,
            register: register as UseFormRegister<cardUpdateProps>,
            formState: formState as FormState<cardUpdateProps>,
            trigger: trigger as UseFormTrigger<cardUpdateProps>
          }}
          data-testid="CardUpdateType"
          autoComplete="off"
          type="text"
          maxLength={6}
          minLength={5}
          pattern="^(credit|debit|Credit|Debit)$"
        />
        <FormInput
          placeholder="Password"
          inputLabel="password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<cardUpdateProps>,
            register: register as UseFormRegister<cardUpdateProps>,
            formState: formState as FormState<cardUpdateProps>,
            trigger: trigger as UseFormTrigger<cardUpdateProps>
          }}
          data-testid="CardUpdatePassword"
          autoComplete="current-password"
          type="password"
          maxLength={6}
          minLength={4}
          pattern="^[0-9]+$"
        />
        <FormInput
          placeholder="New Password"
          inputLabel="new_password"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<cardUpdateProps>,
            register: register as UseFormRegister<cardUpdateProps>,
            formState: formState as FormState<cardUpdateProps>,
            trigger: trigger as UseFormTrigger<cardUpdateProps>
          }}
          data-testid="CardUpdateNewPassword"
          autoComplete="new-password"
          type="password"
          maxLength={6}
          minLength={4}
          pattern="^[0-9]+$"
        />
        <S.Button type="submit" disabled={!!isLoading} data-testid="CardUpdateButton">
          {isLoading ? "Updating..." : "Update"}
        </S.Button>
      </div>
    </S.FormWrapper >
  );
}
