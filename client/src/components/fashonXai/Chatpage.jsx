import React from 'react'

const Chatpage = ({setIsChatPage}) => {

  const handelClose = ()=>{
    setIsChatPage(false)
  }

  return (
    <div className='w-screen h-screen fixed z-[9999] backdrop-blur-md top-0 left-0 flex items-center justify-center'>
      <div className='w-[90vw] h-[90vh] bg-gray-200 rounded-2xl relative overflow-x-hidden'>
         <span className='absolute top-0 right-0 bg-red-400 py-1 px-2 cursor-pointer' onClick={()=>handelClose()}><i className="ri-close-line"></i></span>
      </div>
    </div>
  )
}

export default Chatpage