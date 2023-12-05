import { z } from "zod";

export const changePhoneSchema = z.object({
  userData: z.object({
    new_phone: z.string()
      .min(10, { message: "Invalid phone" })
      .max(11, { message: "Invalid phone" }),
    password: z.string()
      .min(1, { message: "This field has to be filled" }),
  }),
});

export type changePhoneProps = z.infer<typeof changePhoneSchema>;
