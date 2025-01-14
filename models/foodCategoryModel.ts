import mongoose from "mongoose";

const FOOD_CATEGORY_SCHEMA = new mongoose.Schema(
  {
    categoryName: String,
  },
  {
    timestamps: true,
  }
);
const foodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
);
export { foodCategoryModel };
