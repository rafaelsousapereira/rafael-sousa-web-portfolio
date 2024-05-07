import { ComponentProps } from "react";
import { NavLink } from "../buttons/nav-link";
import { Home, User } from "lucide-react";

interface NavBarProps extends ComponentProps<"ul"> {}

export const NavBar = (props: NavBarProps) => {
  
  const routes = [
    { url: "/", label: "Home", icon: <Home /> },
    { url: "/about", label: "Sobre", icon: <User /> },
  ]

  return (
    <ul {...props}>
      {routes.map((item) => (
        <li key={item.url}>
          <NavLink to={item.url}>{item.icon} {item.label}</NavLink>
        </li>
      ))}
    </ul>
  )
}