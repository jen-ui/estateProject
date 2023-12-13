import { log } from "console";
import express from "express";
import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();
import authRouter from "./routes/auth.route.js"


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

mongoose.connect(
  process.env.MONGO_URL
).then(() => {
    console.log('Database connected');
}).catch((e) => {
    console.log(e);
})

app.listen(PORT, () => {
    console.log(`server started at port no ${PORT}`);
})

app.use('/api/auth',authRouter)