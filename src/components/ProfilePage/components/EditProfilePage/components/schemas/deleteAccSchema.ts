import { z } from "zod";

export const deleteAccSchema = z.object({
  userData: z.object({
    password: z.string()
      .min(1, { message: "This field has to be filled" }),
  }),
});

export type deleteAccProps = z.infer<typeof deleteAccSchema>;
