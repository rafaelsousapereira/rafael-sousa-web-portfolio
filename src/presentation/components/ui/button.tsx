import React from "react"
import { Button as ShadcnButton, buttonVariants as shadcnButtonVariants } from "../../../components/ui/button"

export type ButtonProps = React.ComponentProps<typeof ShadcnButton>

export function Button(props: ButtonProps) {
  return <ShadcnButton {...props} />
}

export const buttonVariants = shadcnButtonVariants

export default Button
