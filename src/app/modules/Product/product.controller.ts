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
const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = await ProductServices.getSingleProductFromDB(productId);
  res.status(200).json({
    success: true,
    message: "single product retrieve",
    data: product,
  });
};

const updateProductData = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const data = req.body;

  const updatedProductData = await ProductServices.updateProductFromDB(
    productId,
    data
  );
  res.status(200).json({
    success: true,
    message: "Product Updated successfully",
    data: updatedProductData,
  });
};
const deleteProduct = async (req: Request, res: Response) => {
  const { _id } = req.params;
  await ProductServices.deleteProductFromDB(_id);
  res.status(200).json({
    success: true,
    message: "deleted product",
  });
};
export const productController = {
  createProduct,
  getProduct,
  getSingleProduct,
  deleteProduct,
  updateProductData,
};
