import express from 'express'
import { createRequestController, getRequestByIdController, getRequestByProviderIdController, getRequestByUserIdController } from '../controllers/request.Controller.js'
const router=express.Router()

router.post('/create/request',createRequestController)
router.get('/getRequestByUser/:consumer_id', getRequestByUserIdController)
router.get('/getRequest/:requestid',getRequestByIdController)
router.get('/getRequest/Provider/:providerId',getRequestByProviderIdController)

export default router