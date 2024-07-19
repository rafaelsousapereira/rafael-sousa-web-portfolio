'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import("../../app").then(props => props.App), { ssr: false })
 
export function ClientOnly() {
  return <App />
}