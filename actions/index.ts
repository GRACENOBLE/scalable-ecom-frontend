"use server";

import { LoginFormSchema, SignUpFormSchema } from "@/schemas";
import { z } from "zod";

export const HandleLogin = async (values: z.infer<typeof LoginFormSchema>) => {
  const token = await fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return token.access_token;
};

export const UserData = async (token: string) => {
  const response = await fetch("http://localhost:3000/user/data", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
    return response
};

export const HandleSignUp = async (
  values: z.infer<typeof SignUpFormSchema>
) => {
  console.log(values);
};
