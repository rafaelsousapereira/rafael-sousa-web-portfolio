import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Header } from "./components/header/header"
import { Home } from "./components/home/home"
import { About } from "./components/about/about"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
