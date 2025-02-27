import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../../assets/images/logo_1.jpg'
const Layout = () => {
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
      <div className='flex-1 flex justify-center items-center bg-pink-300 h-screen'>
        <img src={logo} className='w-[70%] h-[60%]' alt="image logo" />
      </div>
      <Outlet/>
    </div>
  )
}

export default Layout
