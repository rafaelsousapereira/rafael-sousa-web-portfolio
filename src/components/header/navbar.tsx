import { ComponentProps } from "react";
import { NavLink } from "../buttons/nav-link";

interface NavBarProps extends ComponentProps<"ul"> {}

export const NavBar = (props: NavBarProps) => {
  
  const routes = [
    { url: "/", label: "Home" },
    { url: "/about", label: "Sobre mim" },
  ]

  return (
    <ul {...props}>
      {routes.map((item) => (
        <li key={item.url}>
          <NavLink to={item.url}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  )
}