import { z } from "zod";

export const cardTransactionSchema = z.object({
  userData: z.object({
    value: z.string()
      .min(1, { message: "The value cannot be equal to or less than 0" }),
    password: z.string()
      .min(4, { message: "Password have at least 4 characters" })
      .max(6, { message: "Passwords limited to 6 characters" }),
    card_type: z.string()
      .min(5, { message: "Card type is 'credit' or 'debit'" })
      .max(6, { message: "Card type is 'credit' or 'debit'" }),
  }),
});

export type cardTransactionProps = z.infer<typeof cardTransactionSchema>;
