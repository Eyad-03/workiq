import express from 'express'
import { currentUser, register } from '../controllers/auth.Controller.js'
import { login } from '../controllers/auth.Controller.js'
import { protect } from '../middleware/protect.Middleware.js'

const router =express.Router()

router.post('/auth/register',register)
router.post('/auth/login',login)
router.get('/auth/me',protect,currentUser)

export default router