export function generateMissionStatus() {
  return {
    oxygen: `${Math.floor(Math.random() * 100)}%`,
    battery: `${Math.floor(Math.random() * 100)}%`,
    temperature: `${Math.floor(Math.random() * 30)}°C`,
    signal: `${Math.floor(Math.random() * 100)}%`
  }
}
