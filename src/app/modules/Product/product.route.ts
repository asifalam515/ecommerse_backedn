import express, { Router } from "express";
import { productController } from "./product.controller";
import ProductModel from "./product.model";

const router: Router = express.Router();

router.post("/products", productController.createProduct);
// router.get("/products", productController.getProducts);
// router.get("products/:searchTerm", productController.searchProducts);
router.get("/products", productController.searchProducts);
router.get("/products/:productId", productController.getSingleProduct);
router.put("/products/:productId", productController.updateProductData);
router.delete("/products/:productId", productController.deleteProduct);

export { router };
