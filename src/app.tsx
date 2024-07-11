import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Header } from "./components/header/header"
import { Home } from "./components/home/home"
import { About } from "./components/about/about"
import { PageNotFound } from "./components/pages-error/page-not-found"
import { ContactForm } from "./components/contact/contact-form"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
