import { type InputHTMLAttributes } from "react";
import { InputField } from "../Styleds";
import {
  InputErrorHandling,
  type FormStateData,
  type UserDatas,
  type CardDatas,
  type TransactionDatas
} from "./components";
import {
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormTrigger,
  type FormState,
} from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormMethodsProps {
  formState: FormState<FormStateData | any>;
  handleSubmit: UseFormHandleSubmit<FormStateData | any>;
  register: UseFormRegister<FormStateData | any>;
  trigger: UseFormTrigger<FormStateData | any>;
}

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  inputLabel: UserDatas | CardDatas | TransactionDatas;
  formMethods: FormMethodsProps;
}

export default function FormInput({
  placeholder,
  inputLabel,
  formMethods,
  ...rest
}: FormInputProps): React.JSX.Element {
  return (
    <>
      <InputErrorHandling
        formState={formMethods.formState}
        inputDatas={inputLabel}
      />
      {formMethods.formState.defaultValues?.userData && (
        <InputField
          placeholder={placeholder}
          aria-label={placeholder}
          {...formMethods.register(`userData.${inputLabel as UserDatas}`, {
            setValueAs: (value: string) => {
              value = value.replace(/-/g, "");
              value = value.replace(/,/g, ".");
              return value;
            },
            onChange: () => {
              formMethods.trigger(`userData.${inputLabel as UserDatas}`);
            }
          })}
          {...rest}
        />
      )}
      {formMethods.formState.defaultValues?.cardData && (
        <InputField
          placeholder={placeholder}
          aria-label={placeholder}
          {...formMethods.register(`cardData.${inputLabel as CardDatas}`, {
            setValueAs: (value: string) => {
              if (inputLabel === "card_number") {
                value = value.replace(/\s/g, "");
              }
              value = value.replace(/-/g, "");
              value = value.replace(/,/g, ".");
              return value;
            },
            onChange: () => {
              formMethods.trigger(`cardData.${inputLabel as CardDatas}`);
            }
          })}
          {...rest}
        />
      )}
      {formMethods.formState.defaultValues?.transactionData && (
        <InputField
          placeholder={placeholder}
          aria-label={placeholder}
          {...formMethods.register(`transactionData.${inputLabel as TransactionDatas}`, {
            setValueAs: (value: string) => {
              value = value.replace(/-/g, "");
              value = value.replace(/,/g, ".");
              return value;
            },
            onChange: () => {
              formMethods.trigger(`transactionData.${inputLabel as TransactionDatas}`);
            }
          })}
          {...rest}
        />
      )}
    </>
  );
}
