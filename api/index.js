import { log } from "console";
import express from "express";
import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose.connect(
  process.env.MONGO_URL
).then(() => {
    console.log('Database connected');
}).catch((e) => {
    console.log(e);
})

app.listen(5000, () => {
    console.log("server started at port no. 4000");
})