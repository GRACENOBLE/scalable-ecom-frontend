"use server";

import { LoginFormSchema } from "@/schemas";
import { z } from "zod";

export const HandleLogin = async (values: z.infer<typeof LoginFormSchema>) => {
  console.log(values);
};
export const HandleSignUp = async (values: z.infer<typeof LoginFormSchema>) => {
  console.log(values);
};
