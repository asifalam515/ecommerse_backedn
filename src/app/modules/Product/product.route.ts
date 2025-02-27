import express, { Router } from "express";
import { productController } from "./product.controller";

const router: Router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getProduct);
router.get("/products/:productId", productController.getSingleProduct);
router.put("/products/:productId", productController.updateProductData);
router.delete("/products/:_id", productController.deleteProduct);

export { router };
