import { ComponentProps } from "react";
import { NavMenu } from "../buttons/nav-menu";
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
          <NavMenu to={item.url}>{item.icon} {item.label}</NavMenu>
        </li>
      ))}
    </ul>
  )
}