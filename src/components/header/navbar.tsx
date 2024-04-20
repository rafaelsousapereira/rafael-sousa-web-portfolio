import { ComponentProps } from "react";
import { NavLink } from "../buttons/nav-link";

interface NavBarProps extends ComponentProps<"ul"> {}

export const NavBar = (props: NavBarProps) => {
  
  const navLink = [
    { href: "#about-us", label: "Sobre mim" },
  ]

  return (
    <ul {...props}>
      {navLink.map((item) => (
        <li key={item.href}>
          <NavLink href={item.href}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  )
}