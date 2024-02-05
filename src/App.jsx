
import Portfolio from "./Portfolio/Portfolio"
// import Navbar from "./Navbar/Navbar"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Home from "./Home/Home"
import Footer from "./Footer/footer"
import {RouterProvider,createBrowserRouter} from "react-router-dom"
export default function App(){
let routers=  createBrowserRouter([
  {path:'/',element:<Home />},
  {path:'/home',element:<Home />},
  {path:'/about',element:<About />},
  {path:'/contact',element:<Contact />},
  {path:'/portfolio',element:<Portfolio />},
  {path:'/footer',element:<Footer />},


])
  return <>
  {/* <Navbar /> */}
  <RouterProvider  router={routers}/>
  {/* <Portfolio/>
  <About />
  <Contact />
  <Home />
  <Footer /> */}
  </>
}
