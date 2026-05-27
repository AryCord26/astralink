'use client'

import { useState } from 'react'
import api from '@/services/api'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })

      localStorage.setItem(
        'token',
        response.data.token
      )

      alert('Login successful!')
    } catch (error) {
      alert('Login failed')
    }
  }

  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-10 rounded-2xl w-[400px]"
      >
        <h1 className="text-3xl text-orange-400 font-bold mb-8">
          AstraLink Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl bg-zinc-800 text-white mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl bg-zinc-800 text-white mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-orange-500 hover:bg-orange-600 transition-all p-3 rounded-xl text-white font-bold"
        >
          Login
        </button>
      </form>
    </main>
  )
}
