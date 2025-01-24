import mongoose, { Schema } from "mongoose";

const FOOD_SCHEMA = new mongoose.Schema(
	{
		foodName: String,
		price: Number,
		image: String,
		ingredients: String,
		category: Schema.Types.ObjectId,
	},
	{
		timestamps: true,
	}
);
const foodModel = mongoose.model("Food", FOOD_SCHEMA, "food");
export { foodModel };
