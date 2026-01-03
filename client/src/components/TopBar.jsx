import React, { useEffect, useState } from 'react'
import AppInput from "./Inputs/AppInput"
import AppButton from './Inputs/AppButton'
import SearchPlaceHolders from '../../config/SearchPlaceHolders'



const TopBar = () => {

     const [placeholder,setPlaceholder] = useState(SearchPlaceHolders[0])

    useEffect(()=>{
          let int = setInterval(()=>{
             setPlaceholder(SearchPlaceHolders[Math.floor(Math.random()*SearchPlaceHolders.length)])
          },2000)
          return ()=>clearInterval(int);
    },[])



  return (
    <div className='w-screen md:w-[85%] px-2 md:px-10 bg-gray-400/20 flex items-center justify-between h-[10vh] backdrop-blur-md fixed right-0 z-[1]'>
        <div className='w-[80%] md:w-[50%] flex'>
           <AppInput placeholder={placeholder}/>
        </div>
        <div>
          <i className="ri-shopping-cart-fill text-2xl cursor-pointer"></i>
        </div>
    </div>
  )
}

export default TopBar