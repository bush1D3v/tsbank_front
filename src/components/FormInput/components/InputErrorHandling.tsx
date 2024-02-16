import { FormState } from "react-hook-form";

export type FormStateData = {
  userData?: {
    id?: number;
    cpf?: string;
    name?: string;
    email?: string;
    phone?: string;
    balance?: number;
    new_phone?: string;
    new_email?: string;
    new_password?: string;
    password?: string;
  }
  cardData?: {
    id?: number;
    card_number?: string;
    cardholder_name?: string;
    expiration_date?: string;
    cvv?: string;
    user_id?: number;
    created_at?: string;
    balance?: number;
    value?: number;
    card_type?: string;
  }
  transactionData?: {
    email?: string;
    value?: number;
    password?: string;
    cpf?: string;
  }
}

export type UserDatas = "id" | "cpf" | "name" | "email" | "phone" | "balance" |
  "new_phone" | "new_email" | "new_password" | "password";
export type CardDatas = "id" | "card_number" | "cardholder_name" | "expiration_date" |
  "cvv" | "user_id" | "created_at" | "balance" | "value" | "card_type";
export type TransactionDatas = "email" | "value" | "password" | "cpf";

export interface InputErrorHandlingProps {
  formState: FormState<FormStateData>;
  inputDatas: UserDatas | CardDatas | TransactionDatas;
}

export function InputErrorHandling({
  formState,
  inputDatas
}: InputErrorHandlingProps): React.JSX.Element {
  return (
    <>
      {formState.errors.userData?.[ inputDatas as UserDatas ]?.message && (
        <span
          className="text-error -mb-7 -mt-3 text-left"
          data-testid="InputErrorHandling">
          {formState.errors.userData?.[ inputDatas as UserDatas ]?.message}
        </span>
      )}
      {formState.errors.cardData?.[ inputDatas as CardDatas ]?.message && (
        <span
          className="text-error -mb-7 -mt-3 text-left"
          data-testid="InputErrorHandling">
          {formState.errors.cardData?.[ inputDatas as CardDatas ]?.message}
        </span>
      )}
      {formState.errors.transactionData?.[ inputDatas as TransactionDatas ]?.message && (
        <span
          className="text-error -mb-7 -mt-3 text-left"
          data-testid="InputErrorHandling">
          {formState.errors.transactionData?.[ inputDatas as TransactionDatas ]?.message}
        </span>
      )}
    </>
  );
}
