'use client'

import { useEffect, useState } from 'react'
import api from '@/services/api'

export default function MessagesPage() {
  const [messages, setMessages] = useState([])
  const [content, setContent] = useState('')

  async function loadMessages() {
    const response = await api.get('/messages', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    setMessages(response.data)
  }

  async function sendMessage() {
    await api.post(
      '/messages',
      {
        sender: 'Earth Control',
        content
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )

    setContent('')
    loadMessages()
  }

  useEffect(() => {
    loadMessages()
  }, [])

  return (
    <main className="min-h-screen bg-[#050816] text-white p-10">
      <h1 className="text-4xl font-bold text-orange-400 mb-8">
        Communications
      </h1>

      <div className="bg-zinc-900 p-6 rounded-2xl mb-8">
        <textarea
          placeholder="Send message to Mars..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-zinc-800 rounded-xl p-4 min-h-[120px]"
        />

        <button
          onClick={sendMessage}
          className="bg-orange-500 mt-4 px-6 py-3 rounded-xl"
        >
          Send Transmission
        </button>
      </div>

      <div className="grid gap-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-zinc-900 p-4 rounded-xl"
          >
            <p className="text-orange-400">
              {message.sender}
            </p>

            <p className="mt-2">{message.content}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
