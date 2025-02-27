import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const CustomerLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default CustomerLayout
