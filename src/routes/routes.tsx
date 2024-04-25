import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "../components/home/home";
import { About } from "../components/about";

export const Routers = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    }
  ])

  return <RouterProvider router={router} />;
}