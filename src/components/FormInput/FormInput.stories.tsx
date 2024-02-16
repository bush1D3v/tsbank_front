import {
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormTrigger,
  type FormState,
  useForm
} from "react-hook-form";
import FormInput from "./FormInput";
import { type Meta } from "@storybook/react";

const meta: Meta<typeof FormInput> = {
  title: "Components/FormInput",
  component: FormInput,
};

export default meta;

type loginProps = {
  userData: {
    email: string;
    password: string;
  };
}

export const Default = () => {
  const {
    formState,
    handleSubmit,
    register,
    trigger
  } = useForm<loginProps>({
    defaultValues: {
      userData: {
        email: "",
        password: "",
      },
    },
  });

  return (
    <div className="flex items-center h-[100dvh] w-[20dvw] justify-center m-auto">
      <FormInput
        placeholder="Email"
        inputLabel="email"
        formMethods={{
          formState: formState as FormState<loginProps>,
          handleSubmit: handleSubmit as UseFormHandleSubmit<loginProps>,
          register: register as UseFormRegister<loginProps>,
          trigger: trigger as UseFormTrigger<loginProps>
        }}
        type="email"
        autoComplete="email"
        maxLength={70}
      />
    </div>
  );
};
