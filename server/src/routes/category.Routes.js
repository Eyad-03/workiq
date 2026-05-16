import express from 'express'
import { getAllCategoryController,getCategoryByIdController,createCategoryController, deleteCategoryController } from '../controllers/category.Controller.js'

const router = express.Router()

router.get("/category/:id",  getCategoryByIdController)
router.get("/categories",  getAllCategoryController)
router.post('/create/category', createCategoryController)
router.delete('/delete/category/:catid',deleteCategoryController)

export default router