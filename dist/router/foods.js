"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodsRouter = void 0;
const express_1 = require("express");
const foodsModel_1 = require("../models/foodsModel");
exports.foodsRouter = (0, express_1.Router)();
exports.foodsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield foodsModel_1.foodModel.find();
    res.json({
        message: "Hello from backend",
        data: foods,
    });
}));
exports.foodsRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const food = yield foodsModel_1.foodModel.find({
        category: id,
    });
    res.json({
        message: "Hello from backend",
        data: food,
    });
}));
exports.foodsRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodName = req.body.foodName;
    const price = req.body.foodPrice;
    const image = req.body.foodIMG;
    const ingredients = req.body.foodIngredients;
    const category = req.body.paramsId;
    const newFood = yield foodsModel_1.foodModel.create({
        foodName,
        price,
        image,
        ingredients,
        category,
    });
    res.json({ message: "created successfully", newFood });
}));
exports.foodsRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const foodName = req.body.foodName;
    const price = req.body.foodPrice;
    const image = req.body.foodIMG;
    const ingredients = req.body.foodIngredients;
    const category = req.body.newCategory;
    const newFood = yield foodsModel_1.foodModel.findByIdAndUpdate(id, {
        foodName,
        price,
        image,
        ingredients,
        category,
    });
    res.json({ message: "updated successfully", newFood });
}));
exports.foodsRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedItem = yield foodsModel_1.foodModel.findByIdAndDelete(id);
    res.json({ message: "deleted successfully", deletedItem });
}));
