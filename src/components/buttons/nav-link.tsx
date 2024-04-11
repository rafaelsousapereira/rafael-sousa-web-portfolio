import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<"a"> {}

export const NavLink = (props: NavLinkProps) => {
  return (
    <a {...props} 
    className="p-2 rounded font-semibold text-xl text-violet-300 hover:text-violet-600 transition">
      {props.children}
    </a>
  )
}