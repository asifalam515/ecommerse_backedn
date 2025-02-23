import app from "../../../app";
import express from "express";
import { productController } from "./product.controller";
export const router = express.Router();

router.post("/create-product", productController.createProduct);
