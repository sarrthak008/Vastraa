import React from 'react'

const BlurBaground = ({children}) => {
  return (
    <div className='h-screen w-screen backdrop-blur-md flex items-center justify-center fixed z-[9999]'>
         {children}
    </div>
  )
}

export default BlurBaground