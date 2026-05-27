export default function StatusCard({
  title,
  value
}) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-zinc-400">
        {title}
      </h2>

      <p className="text-3xl text-orange-400 mt-4 font-bold">
        {value}
      </p>
    </div>
  )
}
