import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CartSkeleton = () => {
    return (
        <div className='w-full relative flex gap-10'>
            <div>
                <Skeleton count={6} width={"50vw"} height={"90px"} baseColor='#aba9a9' highlightColor='#d1cdcd' className='my-1' />
            </div>

            <div className=''>
                <Skeleton count={1} width={"30vw"} height={"60vh"} baseColor='#aba9a9' highlightColor='#d1cdcd' className='my-1' />
                <Skeleton count={1} width={"30vw"} height={"10vh"} baseColor='#aba9a9' highlightColor='#d1cdcd' className='my-1' />
            </div>
        </div>
    )
}

export default CartSkeleton