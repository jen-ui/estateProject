import { log } from "console";
import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("server started at port no.3000");
})