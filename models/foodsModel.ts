import mongoose from "mongoose";

const FOOD_SCHEMA = new mongoose.Schema(
  {
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    category: mongoose.Types.ObjectId,
  },
  {
    timestamps: true,
  }
);
const foodModel = mongoose.model("Food", FOOD_SCHEMA, "food");
export { foodModel };
