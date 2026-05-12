import express from 'express'
import { getAllCategoryController,getCategoryByIdController,createCategoryController } from '../controllers/category.Controller.js'

const router = express.Router()

router.get("/category/:id",  getCategoryByIdController)
router.get("/categories",  getAllCategoryController)
router.post('/category', createCategoryController)

export default router