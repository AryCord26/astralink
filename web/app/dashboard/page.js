export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-4xl font-bold text-orange-400 mb-8">
        Mission Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl">Crew Status</h2>
          <p className="mt-4 text-green-400">All systems operational</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl">Messages</h2>
          <p className="mt-4">12 pending transmissions</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl">Mission Progress</h2>
          <p className="mt-4">78%</p>
        </div>
      </div>
    </div>
  )
}
