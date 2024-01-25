import { z } from "zod";

export const depositSchema = z.object({
  transactionData: z.object({
    value: z.string()
      .min(1, { message: "The value cannot be equal to or less than 0" }),
    email: z.string()
      .min(1, { message: "This field has to be filled" })
      .email("This is not a valid email"),
    password: z.string()
      .min(8, { message: "Please enter a valid password" }),
  }),
});

export type depositProps = z.infer<typeof depositSchema>;
