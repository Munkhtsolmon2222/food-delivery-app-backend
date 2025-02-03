"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodCategoryModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const FOOD_CATEGORY_SCHEMA = new mongoose_1.default.Schema({
    categoryName: String,
}, {
    timestamps: true,
});
const foodCategoryModel = mongoose_1.default.model("FoodCategory", FOOD_CATEGORY_SCHEMA, "food-category");
exports.foodCategoryModel = foodCategoryModel;
