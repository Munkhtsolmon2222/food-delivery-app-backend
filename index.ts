import express, { Request, Response } from "express";
import { configDotenv } from "dotenv";

const PORT = 4000;
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

configDotenv();

const connectMongoDB = async () => {
  const MONGODB_URI = process.env.MONOGODB_URI;
  await mongoose.connect(MONGODB_URI);
};
connectMongoDB();
const FOOD_CATEGORY_SCHEMA = new mongoose.Schema({
  categoryName: String,
});
const foodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
);

app.get("/food-category", async (req: Request, res: Response) => {
  const foodCategories = await foodCategoryModel.find();
  res.json({
    message: "Hello from backend",
    data: foodCategories,
  });
});

app.get("/food-category/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const foodCategory = await foodCategoryModel.findById(id);
  res.json({
    message: "Hello from backend",
    data: foodCategory,
  });
});

app.post("/food-category", async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  await foodCategoryModel.create({
    categoryName: categoryName,
  });
  res.send({ message: "created successfully", categoryName });
});

app.put("/food-category/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { categoryName } = req.body;
  await foodCategoryModel.findByIdAndUpdate(id, {
    categoryName: categoryName,
  });
  res.send({ message: "updated successfully", categoryName });
});

app.delete("/food-category/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedItem = await foodCategoryModel.findByIdAndDelete(id);
  res.send({ message: "deleted successfully", deletedItem });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
