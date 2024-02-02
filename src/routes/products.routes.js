import { Router } from "express";
import {createProducts, getProducts, getProductById, updateProductById, deleteProductById }  from '../controllers/products.controller'

const router = Router()

import * as productsCrtl from '../controllers/products.controller'

router.post('/', createProducts)
router.get('/', getProducts)
router.get('/:productId', getProductById)
router.put('/:productId', updateProductById)
router.delete('/:productId', deleteProductById)



export default router;