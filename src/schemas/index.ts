import { z } from "zod";

export const LoginFormSchema = z.object({
  username: z.string().min(2).max(50),
});