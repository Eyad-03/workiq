import express from 'express'
import { changeStatusController, createRequestController, getRequestByIdController, getRequestByProviderIdController, getRequestByUserIdController } from '../controllers/request.Controller.js'
const router=express.Router()

router.post('/create/request',createRequestController)
router.get('/getRequestByUser/:consumer_id', getRequestByUserIdController)
router.get('/getRequest/:requestid',getRequestByIdController)
router.get('/getRequest/Provider/:providerId',getRequestByProviderIdController)
router.put('/change/status/:requestid',changeStatusController)

export default router