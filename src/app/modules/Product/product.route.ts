import app from "../../../app";
import express from "express";
import { productController } from "./product.controller";
export const router = express.Router();

router.post("products", productController.createProduct);
router.get("/products", productController.getProduct);
router.get("/products/:productId", productController.getSingleProduct);
router.get("/:id", productController.deleteProduct);
