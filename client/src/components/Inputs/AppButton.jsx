import React from 'react'
import { brandName } from '../../../config/BRAND'
import { toast } from 'sonner'

const AppButton = ({title=brandName,varient="black",onclick=()=>{}}) => {

  const button_variant = {
    black:"bg-black",
    purple:"bg-purple-500"
  }

  return (
    <button className={`${button_variant[varient]} font-bold text-xl text-white w-full  rounded-sm hover:bg-gray-900 py-2 px-2 cursor-pointer`} onClick={()=>onclick()}>{title}</button>
  )
}

export default AppButton