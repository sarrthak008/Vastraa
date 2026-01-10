import React from 'react'
import WISH_LIST from "../../assets/illustrations/wishlist.svg"
import ImgContainer from "../Containers/ImgContainer"




const UserWishList = () => {
  return (
    <div>
      <ImgContainer SRC={WISH_LIST} title={"Lets create wishlist.."} btn_title='add products'/>
    </div>
  )
}

export default UserWishList