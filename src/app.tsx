"use client"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Home from "./app/pages/home";
import About from "./app/pages/about";
import ContactForm from "./app/pages/contact";
import PageNotFound from "./components/pages-error";

const App = () => {
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

export default App