import { Link, LinkProps } from "react-router-dom"

interface NavLinkProps extends LinkProps {}

export const NavLink = (props: NavLinkProps) => {
  return (
    <Link className="flex gap-3 p-2 rounded font-semibold text-xl text-gray-500 hover:text-violet-800 transition"
      {...props}
    >
      {props.children}
    </Link>
  )
}