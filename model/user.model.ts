import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface UserObject{
    name: string,
    email: string,

}

const userSchema: Schema<UserObject> = new Schema(
    {
        name:{
            type: String,
            required: [true, 'name is required'],
            trim: true
        },
        email:{
            type: String,
            required: [true, 'Email is required'],
            unique: true
        }


    },
    { timestamps: true }
)

const userModel = mongoose.model("User", userSchema)

export default userModel


