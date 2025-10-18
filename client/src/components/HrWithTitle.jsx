import React from 'react'
import { brandName } from '../../config/BRAND'

const HrWithTitle = ({title=brandName}) => {
  return (
    <span className='w-full h-[2px] bg-gray-400 flex justify-center items-center mt-4'>
         <span className='bg-purple-500 px-2 text-sm'>{brandName}</span>
    </span>
  )
}

export default HrWithTitle