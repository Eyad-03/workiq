import { getAllServiceController,getServicesByCategoryController } from "../controllers/service.Controller.js";
import express from 'express'



const router =express.Router()

router.get('/services',getAllServiceController)
router.get('/servicesByCategory/:catId',getServicesByCategoryController)


export default router