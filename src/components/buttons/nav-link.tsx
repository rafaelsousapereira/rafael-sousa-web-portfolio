import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<"a"> {}

export const NavLink = (props: NavLinkProps) => {
  return (
    <a {...props} 
      className="p-2 rounded font-semibold text-xl text-gray-500 hover:text-violet-800 transition">
      {props.children}
    </a>
  )
}