// const express = require('express')
// const dotenv =require("dotenv")
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connection to DB
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);

    process.exit(1);
  }
};
connectDB();

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/api/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
