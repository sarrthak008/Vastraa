import React from 'react'
import { brandName } from '../../../config/BRAND'

const AppInput = ({placeholder=brandName,type="text" , value=null, onchange=()=>{}}) => {
  return (
    <input  
    value={value}
    onChange={(e)=>onchange(e.target.value)}
    type={type} 
    placeholder={placeholder} 
    className='w-full h-[40px] outline-none border-0  border-b-2 text-md active:border-b-2 bg-gray-100 px-3 focus:border-b-purple-600 '></input>
  )
}

export default AppInput