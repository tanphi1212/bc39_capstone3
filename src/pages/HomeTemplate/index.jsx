import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterHome from './_components/Footer'
import Navbar from './_components/NavbarHome'


export default function HomeTemplate() {
  return (
    <div className='bg-dark'>
        <Navbar/>
        <Outlet />
        <FooterHome />
    </div>
  )
}


