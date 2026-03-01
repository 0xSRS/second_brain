import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import type { Request, Response, NextFunction } from "express";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET!;

export const auth = (req:Request,res:Response,next:NextFunction)=>{
    const {token} = req.body;
    if(token){
        jwt.verify(token,JWT_SECRET,(err:any,data:any)=>{
            if(err) res.json({message:"You are not logged in"});
            else{
                (req as any).user=data;
                next();
            }
        })
    }
}