import React from 'react'
import Navbar from '../components/Navbar'
import SEARCHBG from "../assets/search.mp4"
import SearchInput from '../components/Inputs/SearchInput'
import { brandName } from '../../config/BRAND'

const Explore = () => {
  return (
    <>
     <Navbar/>
     <div className='h-[60vh] w-screen bg-gray-500 relative'>
       <video src={SEARCHBG} muted autoPlay loop className='w-full h-full object-cover brightness-30'/>
       <div className='w-full h-full absolute flex justify-center items-center top-0 flex-col'>
            <div className='w-[40vw] h-[50px]'>
              <SearchInput/>
            </div>
           <p className='mt-5 text-xl text-pink-500'><span className='logo-font text-white'>{brandName} ✘ </span > Fashion ✘ AI</p>
           <p className='text-gray-300 text-sm'>Search your products with easy words</p>
       </div>
       <div className='h-screen w-screen'></div>
     </div>
    </>
  )
}

export default Explore