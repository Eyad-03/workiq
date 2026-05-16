import { createServiceController, deleteServiceController, getAllServiceController,getServiceByIdController,getServiceByProviderIdController,getServicesByCategoryController } from "../controllers/service.Controller.js";
import express from 'express'



const router =express.Router()

router.get('/services',getAllServiceController)
router.get('/service/provider/:id',getServiceByProviderIdController)
router.get('/servicesByCategory/:catName',getServicesByCategoryController)
router.get('/service/:serviceId',getServiceByIdController)
router.post('/create/service',createServiceController)
router.delete('/delete/service/:serviceId',deleteServiceController)

export default router