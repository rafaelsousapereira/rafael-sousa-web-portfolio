import { Construction } from "lucide-react"

export const PageNotFound = () => {
  return (
    <>
      <div className="text-center mt-10 text-zinc-300 font-extrabold text-4xl">
        <span className="flex justify-center mb-4">
          <Construction size={68} />
        </span>

        <p>
          Página em desenvolvimento.
        </p>
        
        <p className="text-zinc-500 mt-4">
          Tente novamente mais tarde.
        </p>
      </div>
    </>
  )
}