import { z } from "zod";

export const changePasswordSchema = z.object({
  userData: z.object({
    new_password: z.string()
      .min(8, { message: "Password must have at least 8 characters" })
      .max(16, { message: "Password limited to 16 characters" }),
    password: z.string()
      .min(1, { message: "This field has to be filled" }),
  }),
});

export type changePasswordProps = z.infer<typeof changePasswordSchema>;
