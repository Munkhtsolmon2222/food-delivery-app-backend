import { Request, Response, Router } from "express";
import { foodModel } from "../models/foodsModel";

export const foodsRouter = Router();

foodsRouter.get("/", async (req: Request, res: Response) => {
  const foodCategories = await foodModel.find();
  res.json({
    message: "Hello from backend",
    data: foodCategories,
  });
});

foodsRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const food = await foodModel.findById(id);
  res.json({
    message: "Hello from backend",
    data: food,
  });
});

foodsRouter.post("/", async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;
  const newFood = await foodModel.create({
    foodName,
    price,
    image,
    ingredients,
    category,
  });
  res.json({ message: "created successfully", newFood });
});

foodsRouter.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { foodName, price, image, ingredients, category } = req.body;
  const newFood = await foodModel.findByIdAndUpdate(id, {
    foodName,
    price,
    image,
    ingredients,
    category,
  });
  res.json({ message: "updated successfully", newFood });
});

foodsRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedItem = await foodModel.findByIdAndDelete(id);
  res.json({ message: "deleted successfully", deletedItem });
});
