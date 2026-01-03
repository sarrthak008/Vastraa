import React from 'react'
import AppInput from "./Inputs/AppInput"
import AppButton from './Inputs/AppButton'

const TopBar = () => {
  return (
    <div className='w-screen md:w-[85%] px-2 md:px-10 bg-gray-400/20 flex items-center justify-between h-[10vh] backdrop-blur-md fixed right-0 z-[1]'>
        <div className='w-[80%] md:w-[50%] flex'>
           <AppInput/>
        </div>
        <div>
          <i className="ri-shopping-cart-fill text-2xl cursor-pointer"></i>
        </div>
    </div>
  )
}

export default TopBar