import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex-1 flex justify-center items-center'>
      <div className='w-[30rem]'>
        <h3 className='font-bold text-3xl text-pink-500 text-center mb-6'>Đăng ký</h3>
        <form action="" className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-pink-600 font-bold'>Tên đăng nhập</label>
            <input 
              className='placeholder:text-pink-400 text-pink-400 border px-4 py-2 rounded-lg border-pink-300 outline-none w-full tex'
              type="text"
              placeholder='Nhập tên của bạn...'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-pink-600 font-bold'>Email</label>
            <input 
              className='placeholder:text-pink-400 text-pink-400 border px-4 py-2 rounded-lg border-pink-300 outline-none w-full tex'
              type="email"
              placeholder='Nhập email của bạn...'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-pink-600 font-bold'>Mật khẩu</label>
            <input 
              className='placeholder:text-pink-400 text-pink-400 border px-4 py-2 rounded-lg border-pink-300 outline-none w-full tex'
              type="password"
              placeholder='Nhập mật khẩu của bạn...'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="" className='text-pink-600 font-bold'>Xác nhận mật khẩu</label>
            <input 
              className='placeholder:text-pink-400 text-pink-400 border px-4 py-2 rounded-lg border-pink-300 outline-none w-full tex'
              type="password"
              placeholder='Nhập lại mật khẩu của bạn...'
            />
          </div>
          <button className='text-white bg-pink-500 text-lg px-6 py-2 rounded mt-4 hover:bg-pink-700'>Đăng ký</button>
          <p className='text-center text-sm italic'>Hoặc bạn đã có tài khoản <Link to='/auth/login' className='text-pink-600'>Đăng nhập</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
