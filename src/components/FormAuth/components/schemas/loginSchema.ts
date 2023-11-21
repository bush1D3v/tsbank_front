import { z } from "zod";

export const schemaLoginForm = z.object({
  userData: z.object({
    email: z.string()
      .min(1, { message: "This field has to be filled" })
      .email("This is not a valid email"),
    password: z.string()
      .min(8, { message: "Please enter a valid password" }),
  }),
});

export type loginProps = z.infer<typeof schemaLoginForm>;
