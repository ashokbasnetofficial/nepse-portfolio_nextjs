import { signIn } from "@/auth";
import Login from "@/components/Login";
import UserLogin from "@/interfaces/userInterface";
import dbConnect from "../lib/connectDB";
dbConnect
const LogInPage = ()=>{
const formSubmitHandler =async (user:UserLogin)=>{
    "use server"
    const email= user.email;
    const password= user.password;
    await dbConnect();
    try{
       await signIn('credentials',{
           email,
           password,
           redirect:true,
           redirectTo:"/"
        })

    }
    catch(error)
   { 
    console.error("signin error",error)
    }


}
return <Login onSubmit={formSubmitHandler}/>
}
export default LogInPage;