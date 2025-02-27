import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import ProductModel from "./product.model";
import { TProduct } from "./product.interface";

const createProduct = async (req: Request, res: Response) => {
  const { product } = req.body;
  const productData = await ProductServices.createProductToDB(product);
  res.status(200).json({
    succcess: true,
    message: "Product created successfully!",
    data: productData,
  });
};
// const getProducts = async (req: Request, res: Response) => {
//   const products = await ProductServices.getProductFromDB();
//   res.status(200).json({
//     succcess: true,
//     message: "Products fetched successfully!",
//     data: products,
//   });
// };
const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const product = await ProductServices.getSingleProductFromDB(productId);
  res.status(200).json({
    success: true,
    message: "Product fetched successfully!",
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
    message: "Product updated successfully!",
    data: updatedProductData,
  });
};
const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  await ProductServices.deleteProductFromDB(productId);
  res.status(200).json({
    success: true,
    message: "Product deleted successfully!",
  });
};

const searchProducts = async (req: Request, res: Response): Promise<any> => {
  try {
    const query: string | undefined = req.query.searchText as string;

    if (!query) {
      const products = await ProductServices.getProductFromDB();
      return res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: products,
      });
    }

    // Search products if query is present
    const results = await ProductModel.find({
      name: { $regex: query, $options: "i" },
    });

    return res.status(200).json({
      success: true,
      message: "Products matching search term 'iphone' fetched successfully!",
      data: results,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const productController = {
  createProduct,
  // getProducts
  getSingleProduct,
  deleteProduct,
  updateProductData,
  searchProducts,
};
