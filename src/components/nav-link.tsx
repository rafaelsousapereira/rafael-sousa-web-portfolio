import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<"a"> {}

export const NavLink = (props: NavLinkProps) => {
  return (
    <a {...props} className="font-semibold text-xl">{props.children}</a>
  )
}