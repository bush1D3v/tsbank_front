import { z } from "zod";

export const cardCreateSchema = z.object({
  userData: z.object({
    card_number: z.string()
      .min(16, { message: "Please enter a valid card number" })
      .max(16, { message: "Please enter a valid card number" }),
    cardholder_name: z.string()
      .min(10, { message: "Cardholder name must have at least 10 characters" })
      .max(30, { message: "Cardholder name limited to 30 characters" }),
    expiration_date: z.string()
      .min(5, { message: "Expiration date must have at least 5 characters" })
      .max(5, { message: "Expiration date limited to 5 characters" }),
    cvv: z.string()
      .min(3, { message: "Please enter a valid CVV" })
      .max(3, { message: "Please enter a valid CVV" }),
    password: z.string()
      .min(4, { message: "Password have at least 4 characters" })
      .max(6, { message: "Passwords limited to 6 characters" }),
    card_type: z.string()
      .min(5, { message: "Card type is 'credit' or 'debit'" })
      .max(6, { message: "Card type is 'credit' or 'debit'" }),
  }),
});

export type cardCreateProps = z.infer<typeof cardCreateSchema>;
