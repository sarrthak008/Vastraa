import React from 'react'
import { brandName } from '../../../config/BRAND'

const AppInput = ({placeholder=brandName,type="text" , value=null, onchange=()=>{}}) => {
  return (
    <input  
    value={value}
    onChange={(e)=>onchange(e.target.value)}
    type={type} 
    placeholder={placeholder} 
    className='w-full h-[50px] outline-none border-0  border-b-2 text-2xl active:border-b-2 bg-gray-50/45 px-3 focus:border-b-purple-600 my-4'></input>
  )
}

export default AppInput