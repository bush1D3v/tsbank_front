import { z } from "zod";

export const withdrawSchema = z.object({
  transactionData: z.object({
    value: z.string()
      .min(1, { message: "The value cannot be equal to or less than 0" }),
    password: z.string()
      .min(8, { message: "Please enter a valid password" }),
  }),
});

export type withdrawProps = z.infer<typeof withdrawSchema>;
