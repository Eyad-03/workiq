import express from 'express'
import { changeProviderProfile } from '../controllers/provider.Controller.js'
import { protect } from '../middleware/protect.Middleware.js'


const router = express.Router()


router.put('/change/profile/provider',protect,changeProviderProfile)


export default router

