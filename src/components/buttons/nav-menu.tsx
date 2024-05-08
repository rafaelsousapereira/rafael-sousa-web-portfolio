import { NavLink, NavLinkProps } from "react-router-dom"

interface NavMenuProps extends NavLinkProps {}

export const NavMenu = (props: NavMenuProps) => {
  return (
    <NavLink 
      className={
        (data) => data.isActive 
          ? "flex gap-3 p-2 rounded font-semibold text-xl text-violet-800 border-solid border-2 border-violet-800" 
          : "flex gap-3 p-2 rounded font-semibold text-xl text-gray-500 hover:text-violet-800 transition"
      }
      {...props}
    >
      {props.children}
    </NavLink>
  )
}