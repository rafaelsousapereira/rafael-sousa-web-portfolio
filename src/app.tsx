import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/header/page"
import { Home } from "./components/home/page";
import { About } from "./components/about/page";
import { ContactForm } from "./components/contact/page";
import { PageNotFound } from "./components/pages-error/page";

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