import React from 'react'

const BlurBaground = ({children}) => {
  return (
    <div className='h-screen left-0 top-0 bg-linear-to-b to-black/70 w-screen backdrop-blur-md flex items-center justify-center fixed z-[999999]'>
         {children}
    </div>
  )
}

export default BlurBaground