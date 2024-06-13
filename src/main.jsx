import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/home/home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/github.jsx'
// //another way to do routing
// const router = createBrowserRouter(
//   CreateRoutesFromElements(
//   <Router path="/" element={<layout/>}>
//   <Router path="" element={<Home/>}>
//   <Router path="about" element={<About/>}/>
//   <Router path="contact" element={<Contact/>}/>
//   </Router>
const router=createBrowserRouter([
  {
  path:'/',
  element:<Layout/>,
  children:[
    {path:"",
  element:<Home/>
},{
  path:"about",
  element:<About/>
},{
  path:"contact",
  element:<Contact/>
},{
  path:"user/:userid",
  element:<User/>
},{
  path:"github",
  element:<Github/>
}

  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
