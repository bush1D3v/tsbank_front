import { z } from "zod";

export const changeEmailSchema = z.object({
  userData: z.object({
    new_email: z.string()
      .min(1, { message: "This field has to be filled" })
      .email("This is not a valid email"),
    password: z.string()
      .min(8, { message: "Please enter a valid password" }),
  }),
});

export type changeEmailProps = z.infer<typeof changeEmailSchema>;
