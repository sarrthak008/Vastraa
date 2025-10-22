import React from 'react'

const SearchInput = () => {
  return (
    <div className='bg-gray-200 h-full w-full rounded-4xl flex items-center relative justify-between overflow-hidden'>
         <input className='h-[90%] w-[60%] px-3 outline-none text-xl border-r-2' placeholder='white kurta..'/>
         <select className='outline-none ml-2'>
            <option>all</option>
            <option>male</option>
            <option>female</option>
            <option>kids</option>
         </select>
         <span className='w-[20%] h-[100%] bg-purple-500  rounded-4xl flex items-center justify-center cursor-pointer text-xl'>
            <i className="ri-search-2-line"></i>
        </span>
    </div>
  )
}

export default SearchInput