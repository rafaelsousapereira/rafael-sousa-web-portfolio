import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavBar } from "./navbar"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-zinc-900/20">
        <nav 
          className="text-gray-300 font-semibold"
        >
          <div className="flex items-center justify-between py-3 mx-12">
            <div 
              className="flex justify-center items-center text-gray-600 text-4xl font-black font-icon bg-gray-300 w-8 h-8 rounded hover:bg-violet-500">
                rs
            </div>

            <NavBar className="flex max-lg:hidden" />
            
            <div className="hidden max-lg:block cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="text-4xl" />
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <nav 
          className="absolute top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-gray-300 bg-gradient-to-b from-gray-300 to-slate-400 text-gray-900 font-extrabold z-[1]"
        >
          <div 
            className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <X className="text-4xl mr-3" />
          </div>

          <NavBar 
            className="lg:hidden flex flex-col items-center justify-center h-full" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </nav>
      )}
    </>
  )
}