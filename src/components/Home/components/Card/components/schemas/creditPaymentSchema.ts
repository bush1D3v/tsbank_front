import { z } from "zod";

export const creditPaymentSchema = z.object({
  userData: z.object({
    value: z.string()
      .min(1, { message: "The value cannot be equal to or less than 0" }),
    password: z.string()
      .min(8, { message: "Password must have at least 8 characters" })
      .max(16, { message: "Password limited to 16 characters" }),
  }),
});

export type creditPaymentProps = z.infer<typeof creditPaymentSchema>;
