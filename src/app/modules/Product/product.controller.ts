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

export const productController = { createProduct };
