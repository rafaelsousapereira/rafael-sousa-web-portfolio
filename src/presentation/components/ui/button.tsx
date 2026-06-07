import React from "react"
import { Button as ShadcnButton, buttonVariants as shadcnButtonVariants } from "../../../components/ui/button"
import { cn } from "../../../shared/lib/utils"

export type ButtonProps = React.ComponentProps<typeof ShadcnButton>

export function Button(props: ButtonProps) {
  return <ShadcnButton {...props} />
}

export const buttonVariants = shadcnButtonVariants

export default Button
