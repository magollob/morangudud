import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Morango do Amor",
  description:
    "Aprenda a receita do doce que conquistou as redes sociais - Tutorial completo do Morango do Amor Perfeito",
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
