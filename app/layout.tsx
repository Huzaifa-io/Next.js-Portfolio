import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhammad Huzaifa - Full Stack Developer",
  description:
    "Portfolio of Muhammad Huzaifa, Full Stack Developer specializing in Web technologies.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

