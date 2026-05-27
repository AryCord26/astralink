import prisma from '../config/prisma.js'

class MessageController {
  async index(req, res) {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return res.json(messages)
  }

  async create(req, res) {
    const message = await prisma.message.create({
      data: req.body
    })

    return res.status(201).json(message)
  }
}

export default new MessageController()
