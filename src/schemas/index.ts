import { z } from "zod";

export const LoginFormSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
});

export const SignUpFormSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
  repeatPassword: z.string().min(2).max(50),
});