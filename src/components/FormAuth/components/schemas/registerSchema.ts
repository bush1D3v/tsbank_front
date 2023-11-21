import { z } from "zod";

export const schemaRegisterForm = z.object({
  userData: z.object({
    name: z.string()
      .min(8, "Please enter a valid name"),
    email: z.string()
      .min(1, { message: "This field has to be filled" })
      .email("This is not a valid email"),
    password: z.string()
      .min(8, { message: "Password must have at least 8 characters" })
      .max(16, { message: "Password limited to 16 characters" }),
    cpf: z.string()
      .min(11, { message: "Invalid cpf" })
      .max(11, { message: "Invalid cpf" }),
    phone: z.string()
      .min(10, { message: "Invalid phone" })
      .max(11, { message: "Invalid phone" }),
  }),
});

export type registerProps = z.infer<typeof schemaRegisterForm>;
