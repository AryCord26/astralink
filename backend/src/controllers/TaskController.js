import prisma from '../config/prisma.js'

class TaskController {
  async index(req, res) {
    const tasks = await prisma.task.findMany()

    return res.json(tasks)
  }

  async create(req, res) {
    const task = await prisma.task.create({
      data: req.body
    })

    return res.status(201).json(task)
  }
}

export default new TaskController()
