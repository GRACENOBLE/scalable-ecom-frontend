"use server";

import { LoginFormSchema, SignUpFormSchema } from "@/schemas";
import { z } from "zod";

export const HandleLogin = async (values: z.infer<typeof LoginFormSchema>) => {
  const response = await fetch(
    "https://ecommerce-gracenoble4212-fwe3pe2u.leapcell.dev/login",
    {
      method: "POST",
      body: JSON.stringify(values),
    }
  ).then((res) => res.json());
  console.log(response);
};

export const HandleSignUp = async (
  values: z.infer<typeof SignUpFormSchema>
) => {
  console.log(values);
};
