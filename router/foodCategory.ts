import { Request, Response, Router } from "express";
import { foodCategoryModel } from "../models/foodCategoryModel";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/", async (req: Request, res: Response) => {
  const foodCategories = await foodCategoryModel.find();
  res.json({
    message: "Hello from backend",
    data: foodCategories,
  });
});

foodCategoryRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const foodCategory = await foodCategoryModel.findById(id);
  res.json({
    message: "Hello from backend",
    data: foodCategory,
  });
});

foodCategoryRouter.post("/", async (req: Request, res: Response) => {
  const { categoryName } = req.body;
  await foodCategoryModel.create({
    categoryName: categoryName,
  });
  res.send({ message: "created successfully", categoryName });
});

foodCategoryRouter.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { categoryName } = req.body;
  await foodCategoryModel.findByIdAndUpdate(id, {
    categoryName: categoryName,
    updatedAt: new Date(),
  });
  res.send({ message: "updated successfully", categoryName });
});

foodCategoryRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedItem = await foodCategoryModel.findByIdAndDelete(id);
  res.send({ message: "deleted successfully", deletedItem });
});
