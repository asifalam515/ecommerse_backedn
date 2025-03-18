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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
const product_model_1 = __importDefault(require("./product.model"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { product } = req.body;
    const productData = yield product_service_1.ProductServices.createProductToDB(product);
    res.status(200).json({
        succcess: true,
        message: "Product created successfully!",
        data: productData,
    });
});
// const getProducts = async (req: Request, res: Response) => {
//   const products = await ProductServices.getProductFromDB();
//   res.status(200).json({
//     succcess: true,
//     message: "Products fetched successfully!",
//     data: products,
//   });
// };
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const product = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
        success: true,
        message: "Product fetched successfully!",
        data: product,
    });
});
const updateProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const data = req.body;
    const updatedProductData = yield product_service_1.ProductServices.updateProductFromDB(productId, data);
    res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: updatedProductData,
    });
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    yield product_service_1.ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
    });
});
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.searchText;
        if (!query) {
            const products = yield product_service_1.ProductServices.getProductFromDB();
            return res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: products,
            });
        }
        // Search products if query is present
        const results = yield product_model_1.default.find({
            name: { $regex: query, $options: "i" },
        });
        return res.status(200).json({
            success: true,
            message: "Products matching search term 'iphone' fetched successfully!",
            data: results,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
exports.productController = {
    createProduct,
    // getProducts
    getSingleProduct,
    deleteProduct,
    updateProductData,
    searchProducts,
};
