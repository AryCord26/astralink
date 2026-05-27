import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Check oxygen systems',
      status: 'pending'
    }
  ])
})

router.post('/', async (req, res) => {
  return res.status(201).json(req.body)
})

export default router
