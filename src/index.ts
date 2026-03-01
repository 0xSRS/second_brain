import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();
const {PORT , URL} = process.env;
const app = express();

app.use(express.json());

app.post("/api/v1/signup" , (req,res)=>{

})

app.post("/api/v1/login" , (req,res)=>{

})

app.post("/api/v1/content" , (req,res)=>{

})

app.get("/api/v1/content" , (req,res)=>{

})

app.delete("/api/v1/content" , (req,res)=>{

})

app.post("/api/v1/brain/share" , (req,res)=>{

})

app.get("/api/v1/brain/:shareLink" , (req,res)=>{

})

async function start(){
    await mongoose.connect(URL!);
    app.listen(PORT, ()=>{
        console.log(`Listening on port ${PORT}`);
    })
}
start();