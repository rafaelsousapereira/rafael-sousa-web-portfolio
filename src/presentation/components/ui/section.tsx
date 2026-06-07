import React from "react"

export function Section({
  children,
  id,
  className,
}: {
  children: React.ReactNode
  id?: string
  className?: string
}) {
  return (
    <section id={id} className={"py-16 " + (className ?? "")}>
      {children}
    </section>
  )
}

export default Section
