import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import prisma from '../config/prisma.js'

class AuthController {
  async register(req, res) {
    try {
      const { name, email, password, role } = req.body

      const userExists = await prisma.user.findUnique({
        where: { email }
      })

      if (userExists) {
        return res.status(400).json({
          error: 'User already exists'
        })
      }

      const hashedPassword = await bcrypt.hash(password, 8)

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role
        }
      })

      return res.status(201).json(user)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body

      const user = await prisma.user.findUnique({
        where: { email }
      })

      if (!user) {
        return res.status(404).json({
          error: 'User not found'
        })
      }

      const passwordMatch = await bcrypt.compare(
        password,
        user.password
      )

      if (!passwordMatch) {
        return res.status(401).json({
          error: 'Invalid password'
        })
      }

      const token = jwt.sign(
        {
          id: user.id
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d'
        }
      )

      return res.json({
        user,
        token
      })
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

export default new AuthController()
