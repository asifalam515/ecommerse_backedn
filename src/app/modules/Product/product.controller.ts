import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const { product } = req.body;
  const productData = await ProductServices.createProductToDB(product);
  res.status(200).json({
    succcess: true,
    message: "product has been created",
    data: productData,
  });
};
const getProduct = async (req: Request, res: Response) => {
  const products = await ProductServices.getProductFromDB();
  res.status(200).json({
    succcess: true,
    message: "get all product",
    data: products,
  });
};
export const productController = { createProduct, getProduct };
