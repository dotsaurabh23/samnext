import { mongoose, Types } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    types: String,
    required: [true, "please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, " please provide a emailaddress"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a Password"],
    unique: true,
  },
  isVerfied : {
    type :Boolean ,
    default : false
  },
  isAdmin : {
    type : Boolean ,
    default : false
  },
  forgotPasswordToken : String,
  forgotPasswordTokenExpiry : Date,
  verifyToken : String,
  verifyTokenExpiry : Date
});

const User = mongoose.models.User || mongoose.model("Users",userSchema);
export default User;