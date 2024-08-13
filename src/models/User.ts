import mongoose,{Document, Schema} from "mongoose";

interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    googleId:string
}
const userSchema:Schema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,select:false},
    googleId:{type:String}
});
export  const User = mongoose.models?.User || mongoose.model<IUser>("User",userSchema);
