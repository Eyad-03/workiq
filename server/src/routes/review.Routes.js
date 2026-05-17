import express from 'express'
import { createReviewController } from '../controllers/review.Controller.js'

const router = express.Router()

router.post('/create/review',createReviewController)


export default router