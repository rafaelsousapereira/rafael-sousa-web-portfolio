import { NavLink, NavLinkProps } from "react-router-dom"

interface NavMenuProps extends NavLinkProps {}

export const NavMenu = (props: NavMenuProps) => {
  return (
    <NavLink 
      className={
        (data) => data.isActive 
          ? "flex gap-1 p-1 mx-4 font-semibold text-xl text-gray-400 border-solid border-b-2 border-violet-800 max-[768px]:text-gray-600 max-[768px]:flex max-[768px]:my-4" 
          : "flex gap-1 p-1 mx-4 font-semibold text-xl text-gray-500 hover:text-violet-800 transition"
      }
      {...props}
    >
      {props.children}
    </NavLink>
  )
}