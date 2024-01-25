import { z } from "zod";

export const pixSchema = z.object({
  transactionData: z.object({
    password: z.string()
      .min(8, { message: "Please enter a valid password" }),
    value: z.string()
      .min(1, { message: "The value cannot be equal to or less than 0" }),
    cpf: z.string()
      .min(11, { message: "Please enter a valid CPF" })
      .max(11, { message: "Please enter a valid CPF" })
  }),
});

export type pixProps = z.infer<typeof pixSchema>;
