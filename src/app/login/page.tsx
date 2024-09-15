"use client";
import Login from "@/components/Login";
import UserLogin from "@/interfaces/userInterface";
import { credentialsLogin } from "@/actions/login";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const LogInPage = () => {
  const router = useRouter();
  const formSubmitHandler = async (user: UserLogin) => {
    const password = user.password;
    const email = user.email;
    if (!email || !password) {
      return toast.error("Please provide both email & password fields.");
    }
    const error = await credentialsLogin(email, password);
    if (error) {
      console.log(error);
      toast.error("Invalid username or password!");
    } else {
      toast.success("Login successful");
      router.push("/my-portfolio");
    }
  };
  return <Login onSubmit={formSubmitHandler} />;
};
export default LogInPage;
