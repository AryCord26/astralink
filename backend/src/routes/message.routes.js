import { Router } from 'express'

import MessageController from '../controllers/MessageController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = Router()

router.use(authMiddleware)

router.get('/', MessageController.index)
router.post('/', MessageController.create)

export default router
