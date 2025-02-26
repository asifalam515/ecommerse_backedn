import { productController } from "./product.controller";
import { TProduct } from "./product.interface";
import ProductModel from "./product.model";

const createProductToDB = async (productData: TProduct) => {
  const result = await ProductModel.create(productData);
  return result;
};
const getProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};
export const ProductServices = {
  createProductToDB,
  getProductFromDB,
  deleteProductFromDB,
  getSingleProductFromDB,
};
