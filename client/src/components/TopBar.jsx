import React, { useEffect, useState } from 'react'
import AppInput from "./Inputs/AppInput"
import AppButton from './Inputs/AppButton'
import SearchPlaceHolders from '../../config/SearchPlaceHolders'
import Notifications from './Notifications'
import Cart from './Cart'



const TopBar = () => {

  const [placeholder, setPlaceholder] = useState(SearchPlaceHolders[0])
  const [isNotificationPannelOn, setisNotificationPannelOn] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    let int = setInterval(() => {
      setPlaceholder(SearchPlaceHolders[Math.floor(Math.random() * SearchPlaceHolders.length)])
    }, 2000)
    return () => clearInterval(int);
  }, [])

  const handelNotificationPannel = () => {
    setisNotificationPannelOn(!isNotificationPannelOn)
  }



  return (
    <>
      <div className='w-screen md:w-[85%] px-2 md:px-10 bg-gray-400/20 flex items-center justify-between h-[10vh] backdrop-blur-md fixed right-0 z-[1]'>
        <div className='w-[80%] md:w-[50%] flex'>
          <AppInput placeholder={placeholder} />
        </div>
        <div className='flex gap-7'>
          <i className="ri-notification-3-fill text-2xl cursor-pointer" onClick={() => handelNotificationPannel()} onMouseEnter={() => handelNotificationPannel()}></i>
          <i className="ri-shopping-cart-fill text-2xl cursor-pointer" onClick={()=>setCartOpen(true)}></i>
        </div>
      </div>
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      {isNotificationPannelOn && <Notifications />}
    </>
  )
}

export default TopBar