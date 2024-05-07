import { SquareArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export const ButtonHome = () => {
  return (
    <>
      <Link to="/" className="flex gap-1 fixed bottom-0 left-0 mx-10 my-5 text-base font-extrabold bg-zinc-200/60 p-1 rounded text-zinc-700 hover:bg-violet-600/60 hover:text-violet-300"
        >
        <SquareArrowLeft /> Home 
      </Link>
    </>
  )
}