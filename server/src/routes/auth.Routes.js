import express from 'express'
import { register } from '../controllers/auth.Controller.js'
import { login } from '../controllers/auth.Controller.js'

const router =express.Router()

router.post('/auth/register',register)
router.post('/auth/login',login)

export default router