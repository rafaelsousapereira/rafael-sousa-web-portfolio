/* eslint-disable @next/next/no-page-custom-font */
import { Metadata } from "next"
import React from "react"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Rafael | DEV",
  description: "Bem-vindos, ao meu portfólio! Olá, eu sou Rafael Sousa um desenvolvedor full-stack apaixonado por tecnologia e soluções criativas.",
} 

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Tac+One&display=swap" rel="stylesheet" />
        
        <title>Rafael | DEV</title>

        <meta name="description" content="Olá, eu sou Rafael Sousa um desenvolvedor full-stack apaixonado por tecnologia e soluções criativas." />
      </head>
      <body 
        className="bg-zinc-950/90 antialiased selection:bg-violet-400 selection:text-zinc-800"
      >
        <div id="root">{children}</div>
        
      </body>
    </html>
  )
}