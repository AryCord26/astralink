'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-zinc-950 border-b border-zinc-800 p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/tasks">Tasks</Link>
      <Link href="/messages">Messages</Link>
    </nav>
  )
}
