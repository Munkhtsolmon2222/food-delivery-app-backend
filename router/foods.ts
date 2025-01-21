import { Request, Response, Router } from "express";
import { foodModel } from "../models/foodsModel";

export const foodsRouter = Router();

foodsRouter.get("/", async (req: Request, res: Response) => {
  const foods = await foodModel.find();
  res.json({
    message: "Hello from backend",
    data: foods,
  });
});

foodsRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const food = await foodModel.find({
    category: id,
  });
  res.json({
    message: "Hello from backend",
    data: food,
  });
});

foodsRouter.post("/", async (req: Request, res: Response) => {
  const foodName = req.body.foodName;
  const price = req.body.foodPrice;
  const image = req.body.foodIMG;
  const ingredients = req.body.foodIngredients;
  const category = req.body.paramsId;

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
  const foodName = req.body.foodName;
  const price = req.body.foodPrice;
  const image = req.body.foodIMG;
  const ingredients = req.body.foodIngredients;
  const category = req.body.newCategory;
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
