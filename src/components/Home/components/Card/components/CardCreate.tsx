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
import { type cardCreateProps, cardCreateSchema } from "./schemas";
import { cardCreateSubmit } from "./functions";
import * as S from "@/components/Styleds";
import Modal from "@/components/Modal";
import { CARD } from "@/utils/routerPaths";
import FormInput from "@/components/FormInput";

export default function CardCreate(): ReactElement {
  const [ error, setError ] = useState<string>("");
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState,
    trigger
  } = useForm<cardCreateProps>({
    criteriaMode: "all",
    mode: "onSubmit",
    resolver: zodResolver(cardCreateSchema),
    defaultValues: {
      cardData: {
        card_number: "",
        card_type: "",
        cardholder_name: "",
        cvv: "",
        expiration_date: "",
        password: "",
      },
    },
  });

  const onSubmit = async (data: cardCreateProps): Promise<void> => {
    setIsLoading(!isLoading);
    const result = await cardCreateSubmit(data);

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
      data-testid="CardCreate"
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
        data-testid="CardCreateSubtitle"
      >
        Create Your Card
      </h2>
      <div className="flex gap-7 py-7 flex-col w-11/12 lg:w-3/4">
        <FormInput
          placeholder="Cardholder name"
          inputLabel="cardholder_name"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<cardCreateProps>,
            register: register as UseFormRegister<cardCreateProps>,
            formState: formState as FormState<cardCreateProps>,
            trigger: trigger as UseFormTrigger<cardCreateProps>
          }}
          data-testid="CardCreateName"
          autoComplete="cc-name"
          type="text"
          pattern="^[a-zA-ZÀ-ÖØ-öø-ÿ]+(?:\s[a-zA-ZÀ-ÖØ-öø-ÿ]+)*$"
          minLength={10}
          maxLength={75}
        />
        <div className="flex gap-7">
          <div className="flex w-[100%] flex-col gap-7">
            <FormInput
              placeholder="Card Number"
              inputLabel="card_number"
              formMethods={{
                handleSubmit: handleSubmit as UseFormHandleSubmit<cardCreateProps>,
                register: register as UseFormRegister<cardCreateProps>,
                formState: formState as FormState<cardCreateProps>,
                trigger: trigger as UseFormTrigger<cardCreateProps>
              }}
              data-testid="CardCreateNumber"
              autoComplete="cc-number"
              type="text"
              pattern="^[0-9]+$"
              maxLength={16}
              minLength={16}
            />
          </div>
          <div className="flex w-[100%] flex-col gap-7">
            <FormInput
              placeholder="CVV"
              inputLabel="cvv"
              formMethods={{
                handleSubmit: handleSubmit as UseFormHandleSubmit<cardCreateProps>,
                register: register as UseFormRegister<cardCreateProps>,
                formState: formState as FormState<cardCreateProps>,
                trigger: trigger as UseFormTrigger<cardCreateProps>
              }}
              data-testid="CardCreateCvv"
              autoComplete="cc-csc"
              type="text"
              pattern="^[0-9]{1,3}$"
              maxLength={3}
              minLength={3}
            />
          </div>
        </div>
        <FormInput
          placeholder="Expiration Date (mm/yy)"
          inputLabel="expiration_date"
          formMethods={{
            handleSubmit: handleSubmit as UseFormHandleSubmit<cardCreateProps>,
            register: register as UseFormRegister<cardCreateProps>,
            formState: formState as FormState<cardCreateProps>,
            trigger: trigger as UseFormTrigger<cardCreateProps>
          }}
          data-testid="CardCreateExpiration"
          autoComplete="cc-exp"
          type="text"
          pattern="^(0[1-9]|1[0-2])/(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])$"
          maxLength={6}
          minLength={5}
        />
        <div className="flex gap-7">
          <div className="flex w-[100%] flex-col gap-7">
            <FormInput
              placeholder="Password"
              inputLabel="password"
              formMethods={{
                handleSubmit: handleSubmit as UseFormHandleSubmit<cardCreateProps>,
                register: register as UseFormRegister<cardCreateProps>,
                formState: formState as FormState<cardCreateProps>,
                trigger: trigger as UseFormTrigger<cardCreateProps>
              }}
              data-testid="CardCreatePassword"
              autoComplete="new-password"
              type="password"
              maxLength={6}
              minLength={4}
              pattern="^[0-9]+$"
            />
          </div>
          <div className="flex w-[100%] flex-col gap-7">
            <FormInput
              placeholder="Card Type"
              inputLabel="card_type"
              formMethods={{
                handleSubmit: handleSubmit as UseFormHandleSubmit<cardCreateProps>,
                register: register as UseFormRegister<cardCreateProps>,
                formState: formState as FormState<cardCreateProps>,
                trigger: trigger as UseFormTrigger<cardCreateProps>
              }}
              data-testid="CardCreateType"
              autoComplete="off"
              type="text"
              maxLength={6}
              minLength={5}
              pattern="^(credit|debit|Credit|Debit)$"
            />
          </div>
        </div>
        <S.Button type="submit" disabled={!!isLoading} data-testid="CardCreateButton">
          {isLoading ? "Creating..." : "Create"}
        </S.Button>
      </div>
    </S.FormWrapper >
  );
}

