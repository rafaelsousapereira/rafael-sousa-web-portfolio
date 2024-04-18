import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<"a"> {}

export const NavLink = (props: NavLinkProps) => {
  return (
    <a {...props} 
    className="p-2 rounded font-semibold text-xl text-violet-600 hover:text-violet-900 transition">
      {props.children}
    </a>
  )
}