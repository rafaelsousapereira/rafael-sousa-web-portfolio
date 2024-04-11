import { Button } from "./button"

interface ButtonGroupProps {
  children: string
}

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <Button>{props.children}</Button>
}