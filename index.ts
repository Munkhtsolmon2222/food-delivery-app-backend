import express from "express";
import { configDotenv } from "dotenv";
import { foodCategoryRouter } from "./router/foodCategory";

const PORT = 4000;
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());
configDotenv();

const connectMongoDB = async () => {
  const MONGODB_URI = process.env.MONOGODB_URI;
  await mongoose.connect(MONGODB_URI);
};
connectMongoDB();

app.use("/food-category/", foodCategoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
