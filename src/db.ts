import mongoose, { mongo } from "mongoose";
import {model , Schema} from "mongoose";
import { required } from "zod/mini";

const UserSchema = new Schema({
    email : {type:String , unique:true},
    username : {type:String},
    password : {type:String}
})

const ContentSchema = new Schema({
    title:String,
    link:String,
    tags: [{type:mongoose.Types.ObjectId , ref:'Tag'}],
    userId: {type: mongoose.Types.ObjectId , ref:"Users" , required:true}
})

export const UserModel = model( "User" ,UserSchema);
export const ContentModel = model( "Content" ,ContentSchema);