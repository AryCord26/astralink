import './globals.css'

export const metadata = {
  title: 'AstraLink Mission Control',
  description: 'Mars communication platform'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
