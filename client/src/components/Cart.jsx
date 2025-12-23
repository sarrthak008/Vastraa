import React, { useState } from 'react'
import BlurBaground from './Containers/BlurBaground'
import CartSkeleton from './Skeletons/CartSkeleton'

const CartBody = ({setisCartOpen}) => {

    const handelCartClose =() =>{
         setisCartOpen(false)
    }

    return (
        <BlurBaground>
            <div className='w-[90vw] h-[90vh] relative bg-gray-100 p-2 rounded-2xl hide-scrolbar overflow-x-hidden overflow-y-scroll'>
                <h1 className='text-4xl logo-font mb-4'>My cart</h1>
                {
                    // sckleton ui for cart  
                    <CartSkeleton />
                }
                <div className='absolute top-0 right-0 z-[100] bg-red-400 w-[30px] flex text-xl cursor-pointer items-center justify-center h-[30px]' onClick={()=>handelCartClose()}><i className="ri-close-line"></i></div>
            </div>
        </BlurBaground>
    )

}


const Cart = () => {

     const [isCartOpen, setisCartOpen] = useState(false)

    return (
        <>
            <div className='fixed top-2 right-4 z-[100] flex items-center justify-center cursor-pointer'>
                <i className="ri-shopping-bag-4-fill text-3xl  z-[30]" onClick={()=>setisCartOpen(true)}></i>
                <div className='h-[20px] w-[20px] bg-green-500 rounded-full absolute mb-7 ml-4 flex items-center justify-center text-xs text-white'>10</div>
            </div>
           
            {isCartOpen && <CartBody setisCartOpen={setisCartOpen} />}
        </>
    )
}

export default Cart