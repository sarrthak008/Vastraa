import React from 'react'
import Skeleton from 'react-loading-skeleton'
import EMPTYNOTIFICATION from "../assets/illustrations/emptynotification.svg"
import ImgContainer from "../components/Containers/ImgContainer"

const Notifications = () => {
  return (
    <div className='fixed right-[2vw]  p-2 top-[11vh] h-[450px] w-[350px] bg-gray-200 rounded-2xl shadow-lg  z-[100]'>
        <div className='absolute h-[30px] w-[30px] rotate-[45deg] bg-gray-200 top-[-10px] right-[55px]'></div>
         <div className='flex justify-between mt-4'>
             <h3 className='font-extrabold'>Notifications</h3>
             <span className='text-gray-600'>Mark as read</span>
         </div>

         {/* notifcation container */}

         <div className='w-full h-[90%] overflow-x-hidden overflow-y-scroll hide-scrolbar'>
             <ImgContainer SRC={EMPTYNOTIFICATION} title={"no notifications found"} isBtnActive={false}/>
         </div>
    </div>
  )
}

export default Notifications