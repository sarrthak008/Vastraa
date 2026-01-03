import React from 'react'
import TopBar from '../TopBar'
import HrWithTitle from "../HrWithTitle"
import { ProductCard, ProductCardSkeleton } from '../Products/ProductCard'

const UserHome = () => {
  return (
    <>
      <TopBar />
      <div className='overflow-y-scroll h-screen hide-scrolbar mt-[12vh] '>
        <div className='w-full h-[35vh] bg-gray-400 rounded-2xl'>
          {/* add your main offer image here */}
        </div>
        <HrWithTitle title='Offers for youhh' className='mt-10' />

        <div className='w-full flex flex-wrap gap-5 min-h-screen mb-40 mt-12'>
            {
               [...Array(10)].map((item)=>(
                <ProductCard/>
                // /<ProductCardSkeleton/>
               ))
            }

        </div>
      </div>
    </>
  )
}

export default UserHome