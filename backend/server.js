// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import morgan from "morgan";
// import Product from "./models/products.js";
// import productRouter from './routes/routes.js'
// import getProducts from "./controllers/controllers"
// const getProducts = require("./controllers/controllers.js");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
let Product = require("./models/products");
// const productRouter = require("./routes/routes.js")
require('dotenv').config(); 


const app = express();
const port = process.env.PORT || 3002;
const mongodbUri = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/products";

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/', productRouter);

mongoose.connect(mongodbUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// app.get('/', getProducts);

app.get('/', async (req, res) => {
  try {
      const response = await Product.find({});
      if(response.length === 0){
          return res.status(404).json({status:"error", message:"No data found!"})
      }
      return res.status(200).json({status: "ok", data: response})
  } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ status: "error", message: "Something went wrong!"})
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});



