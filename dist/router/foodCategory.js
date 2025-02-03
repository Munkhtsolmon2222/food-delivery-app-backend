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
exports.foodCategoryRouter = void 0;
const express_1 = require("express");
const foodCategoryModel_1 = require("../models/foodCategoryModel");
exports.foodCategoryRouter = (0, express_1.Router)();
exports.foodCategoryRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foodCategories = yield foodCategoryModel_1.foodCategoryModel.find();
    res.json({
        message: "Hello from backend",
        data: foodCategories,
    });
}));
exports.foodCategoryRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const foodCategory = yield foodCategoryModel_1.foodCategoryModel.findById(id);
    res.json({
        message: "Hello from backend",
        data: foodCategory,
    });
}));
exports.foodCategoryRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryName } = req.body;
    yield foodCategoryModel_1.foodCategoryModel.create({
        categoryName: categoryName,
    });
    res.send({ message: "created successfully", categoryName });
}));
exports.foodCategoryRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { categoryName } = req.body;
    yield foodCategoryModel_1.foodCategoryModel.findByIdAndUpdate(id, {
        categoryName: categoryName,
        updatedAt: new Date(),
    });
    res.send({ message: "updated successfully", categoryName });
}));
exports.foodCategoryRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedItem = yield foodCategoryModel_1.foodCategoryModel.findByIdAndDelete(id);
    res.send({ message: "deleted successfully", deletedItem });
}));
