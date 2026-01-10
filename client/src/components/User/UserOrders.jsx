import React from 'react'
import TopBar from '../TopBar'
import ImgContainer from '../Containers/ImgContainer'
import ORDER from "../../assets/illustrations/orders.svg"

const UserOrders = () => {
  return (
    <>
      <TopBar />
      <div className='overflow-y-scroll h-screen hidden-scrollbar'>
         <ImgContainer SRC={ORDER} btn_title='hey lest shop..'/>
      </div>
    </>
  )
}

export default UserOrders