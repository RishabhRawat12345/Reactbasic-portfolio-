import React from 'react'
import Header from './Components/header/header'
import Footer from './Components/footer/footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/> 
    </>
  )
}
