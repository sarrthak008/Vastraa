import React from 'react'
import { brandName } from '../../../config/BRAND'

const AppButton = ({title=brandName}) => {
  return (
    <button className='bg-black text-white w-full mt-4 rounded-sm hover:bg-gray-900 py-2 cursor-pointer'>{title}</button>
  )
}

export default AppButton