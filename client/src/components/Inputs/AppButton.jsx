import React from 'react'
import { brandName } from '../../../config/BRAND'
import { toast } from 'sonner'

const AppButton = ({title=brandName}) => {
  return (
    <button className='font-bold text-xl bg-black text-white w-full mt-4 rounded-sm hover:bg-gray-900 py-2 cursor-pointer' onClick={()=>toast("hello")}>{title}</button>
  )
}

export default AppButton