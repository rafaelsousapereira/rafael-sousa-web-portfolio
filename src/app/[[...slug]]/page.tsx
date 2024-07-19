import React from 'react'
import '../../../src/index.css'
import { ClientOnly } from './client'

export function generateStaticParams() {
  return [ { slug: [""] }, { slug: ["about"] }, { slug: ["contact"] } ]
}
 
export default function Page() {
  return <ClientOnly />
}