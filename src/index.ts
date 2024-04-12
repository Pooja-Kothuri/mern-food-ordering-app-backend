//server code
import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute"
import {Request,Response} from "express";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>console.log("connected to database!!")).catch((err)=>console.log(err, " connection failed.."))
 //process.env is used to get vlaue from .env file
//casting in ts


const app=express();//creates express server 
app.use(express.json());//middleware to convert body of request api to json
//it  auotmatically converts body of request to json
app.use(cors());

//creating an api (endpoint ) that frontend gonna call to create a user
//creating user api
//any api that starts with /api/my/user is redirected to myUserRoute by express(middleware)

//adding an endpoint to server ,that we can call to check server has started
app.get("/health",(req:Request,res:Response)=>{
  res.send({message:"health ok!!"})
});

app.use("/api/my/user",myUserRoute);
 

app.listen(7000,()=>{
    console.log("server started at port 7000");
})