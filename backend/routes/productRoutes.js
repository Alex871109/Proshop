import express from 'express';
// import products from "../data/products.js";
import { asyncHandler } from '../middlewares/asyncHandler.js';
import Product from '../models/productModel.js';
import { checkObjectId } from '../middlewares/checkObjectId.js';
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', checkObjectId, getProductById);

export default router;
