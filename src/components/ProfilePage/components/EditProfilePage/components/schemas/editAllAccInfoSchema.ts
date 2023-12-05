import { z } from "zod";

export const editAllAccInfoSchema = z.object({
  userData: z.object({
    new_email: z.string()
      .min(1, { message: "This field has to be filled" })
      .email("This is not a valid email"),
    new_password: z.string()
      .min(8, { message: "Password must have at least 8 characters" })
      .max(16, { message: "Password limited to 16 characters" }),
    new_phone: z.string()
      .min(10, { message: "Invalid phone" })
      .max(11, { message: "Invalid phone" }),
    password: z.string()
      .min(1, { message: "This field has to be filled" }),
  }),
});

export type editAllAccInfoProps = z.infer<typeof editAllAccInfoSchema>;
