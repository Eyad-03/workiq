import express from 'express'
import { getAllUsersController } from '../controllers/user.Controller.js'


const router = express.Router()


router.get('/allUsers',getAllUsersController)

export default router