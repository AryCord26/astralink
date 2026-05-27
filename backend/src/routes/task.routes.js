import { Router } from 'express'

import TaskController from '../controllers/TaskController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = Router()

router.use(authMiddleware)

router.get('/', TaskController.index)
router.post('/', TaskController.create)

export default router
