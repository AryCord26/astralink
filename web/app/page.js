import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-400">
          AstraLink
        </h1>

        <p className="text-zinc-400 mt-6 text-xl">
          Mission Control Platform for Mars
        </p>

        <div className="flex gap-4 mt-10 justify-center">
          <Link
            href="/login"
            className="bg-orange-500 px-6 py-3 rounded-xl"
          >
            Login
          </Link>

          <Link
            href="/dashboard"
            className="bg-zinc-800 px-6 py-3 rounded-xl"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}
