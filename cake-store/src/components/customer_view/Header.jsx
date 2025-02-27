import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { HiCake } from "react-icons/hi2";
import { MdContactSupport } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
const Header = () => {
    const listMenu = [
        {
            title: "Trang chủ",
            icon : <FaHome />
        },
        {
            title: "Sản phẩm",
            icon : <HiCake />
        },
        {
            title: "Liên hệ",
            icon : <MdContactSupport />
        },
        {
            title: "Blog",
            icon : <FaBlog />
        },
        {
            title: "Giỏ hàng",
            icon : <FaCartShopping />
        }
    ]
    const [menu, setMenu] = useState('Trang chủ')

  return (
    <div>
        <div className='flex justify-between items-center px-[7%] py-4'>
            <div className='flex gap-10 items-center'>
                {/* Logo */}
                <div>
                    <h1 className='text-pink-600 font-bold text-2xl'>Cake Store.</h1>
                </div>

                {/* Search */}
                <div>
                    <div className='border border-gray-400 flex items-center rounded-md overflow-hidden'>
                        <input 
                            type="text" 
                            placeholder='Tìm kiếm bánh sinh nhật...'
                            className='placeholder:text-gray-400 placeholder:text-sm text-sm px-4 py-2 flex-1 mr-4'
                        />
                        <div className='bg-pink-500 px-4 py-3 flex justify-center items-center hover:bg-pink-600'><IoSearch className='text-white cursor-pointer'/></div>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <div className='flex gap-3'>
                {
                    listMenu.map((item) =>
                    (
                        <div className={`flex flex-col items-center justify-center px-4 py-2 cursor-pointer
                            ${item.title===menu?'bg-pink-500 text-white rounded-md hover:bg-pink-400' 
                                :'hover:bg-pink-200 rounded-md hover:text-pink-500'}`}
                            onClick={()=>setMenu(item.title)}
                            key={item.title}>
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                    ))
                }
                <div className='flex flex-col items-center justify-center cursor-pointer border border-pink-500 px-4 py-2 rounded-md text-pink-500'>
                    <FaUser/>
                    <span>Tài khoản</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
