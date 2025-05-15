
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Nav } from './component/nav'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Projects from './pages/projects'



const router=createBrowserRouter([
  {
    path:"/",
    element:(
      <>
      <Nav/>
      <Home/>
      </>
    )
  },
   {
    path:"/about",
    element:(
      <>
      <Nav/>
      <About/>
      </>
    )
  }
  ,
   {
    path:"/contact",
    element:(
      <>
      <Nav/>
      <Contact/>
      </>
    )
  }
  ,
   {
    path:"/projects",
    element:(
      <>
      <Nav/>
      <Projects/>
      </>
    )
  }
])
function App() {
  
  return (
 

  <>
    <RouterProvider router={router}/>
  </>
  )
}

export default App
