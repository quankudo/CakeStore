import React from 'react'
import Cake1 from '../../assets/images/Cake1.jpg'
import { FaCartShopping } from "react-icons/fa6";

const Cake = ({id, name, price, discountPrice, imageUrl}) => {
  return (
    <div className='p-2 relative rounded-md border border-gray-300' style={{flex: '0 1 18rem'}}>
        <img src={Cake1} alt="birthday cake" className='w-full h-[8rem] object-cover rounded-md'/>
        <h3 className='text-[15px] italic my-2'>{name}</h3>
        <p className='text-center text-pink-500 font-bold text-sm'>{price} vnd</p>
        {
            discountPrice!=null && <span className='absolute top-3 right-3 rounded-tl-md rounded-br-md text-sm text-white bg-pink-500 px-2 py-1'>Giảm {discountPrice}%</span>
        }
        <div className='flex gap-2 mt-2'>
            <button className='flex-1 flex gap-1 items-center justify-center bg-pink-500 text-white rounded-md text-sm px-4 py-1'>Add cart <FaCartShopping/></button>
            <button className='flex-1 text-pink-600 border border-pink-500 bg-white rounded-md text-sm px-4 py-1'>Buy now</button>
        </div>
    </div>
  )
}

export default Cake
