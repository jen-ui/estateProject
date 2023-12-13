import e from "express";
import express from "express";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save()
      res.status(201).json("user created succesfully")
    
 
    }
  catch (e) {
         res.status(500).json(e.message);
    console.log(e);
    }
};
