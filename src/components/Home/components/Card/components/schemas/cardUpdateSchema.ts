import { z } from "zod";

export const cardUpdateSchema = z.object({
  cardData: z.object({
    new_password: z.string()
      .min(4, { message: "Password have at least 4 characters" })
      .max(6, { message: "Passwords limited to 6 characters" }),
    password: z.string()
      .min(4, { message: "Password have at least 4 characters" })
      .max(6, { message: "Passwords limited to 6 characters" }),
    card_type: z.string()
      .min(5, { message: "Card type is 'credit' or 'debit'" })
      .max(6, { message: "Card type is 'credit' or 'debit'" }),
  }),
});

export type cardUpdateProps = z.infer<typeof cardUpdateSchema>;
