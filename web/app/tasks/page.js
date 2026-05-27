'use client'

import { useEffect, useState } from 'react'
import api from '@/services/api'

export default function TasksPage() {
  const [tasks, setTasks] = useState([])

  async function loadTasks() {
    const response = await api.get('/tasks', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    setTasks(response.data)
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <h1 className="text-4xl font-bold text-orange-400 mb-8">
        Mission Tasks
      </h1>

      <div className="grid gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-zinc-900 p-6 rounded-2xl"
          >
            <h2 className="text-2xl font-bold">
              {task.title}
            </h2>

            <p className="text-zinc-400 mt-2">
              {task.description}
            </p>

            <span className="text-orange-400 mt-4 block">
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
