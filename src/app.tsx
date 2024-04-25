import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer } from "./components/footer/footer"
import { Header } from "./components/header/header"
import { Home } from "./components/home/home"
import { About } from "./components/about"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
