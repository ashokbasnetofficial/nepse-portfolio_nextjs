import SignupComponent from "@/components/SignUp";
import { User } from "@/interfaces/userInterface";
import dbConnect from "../lib/connectDB";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";
import { User as UserSchema } from "@/models/User";
const SignUpPage = ()=>{  
const formSubmitHandler = async (formData:User) =>{
  "use server";
    const password =formData.password;
    const name = formData.name;
    const email= formData.email;
    const hashPassword =await hash(password,10);
    await dbConnect();
    let user =await UserSchema.findOne({email});
    if(user) throw new Error("user already exist");
    await UserSchema.create({
      name,
      email,
      password:hashPassword
    })
  redirect('/login');
  }

return <SignupComponent onSubmit={formSubmitHandler} />
}
export default SignUpPage;