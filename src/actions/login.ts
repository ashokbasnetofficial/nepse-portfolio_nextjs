"use server";
import { signIn } from "@/auth";
import { CredentialsSignin } from "next-auth";
const credentialsLogin = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    const err = error as CredentialsSignin;
    return err.message;
  }
};
export { credentialsLogin };
