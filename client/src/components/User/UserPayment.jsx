import React from 'react'
import ImgContainer from '../Containers/ImgContainer'
import PAYMENT from "../../assets/illustrations/payment.svg"


const UserPayment = () => {
  return (
    <div>
      <ImgContainer SRC={PAYMENT} title={"here is your all payment history..."} btn_title='download' />
    </div>
  )
}

export default UserPayment