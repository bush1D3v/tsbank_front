import { z } from "zod";

export const creditPaymentSchema = z.object({
  cardData: z.object({
    value: z.string()
      .min(1, { message: "The value cannot be equal to or less than 0" }),
    password: z.string()
      .min(4, { message: "Password must have at least 4 characters" })
      .max(6, { message: "Password limited to 6 characters" }),
  }),
});

export type creditPaymentProps = z.infer<typeof creditPaymentSchema>;
