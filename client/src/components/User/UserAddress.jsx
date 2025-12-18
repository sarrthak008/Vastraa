import React from 'react'
import ADD_IMG from "../../assets/illustrations/adress.svg"
import AppButton from '../Inputs/AppButton'
import AppInput from '../Inputs/AppInput'
import "leaflet/dist/leaflet.css";

//show component if there is any address not avaliable not found.
const AddressNotFound = () => {
  return (
    <>
      <div className='h-[350px] w-[350px]'>
        <img src={ADD_IMG} />
        <p className='text-center mt-3 text-gray-400 text-sm'>“Where should I send your parcel?”</p>
      </div>

      <div className=' '>
        <AppButton title='Add new address' varient='purple' />
      </div>
    </>
  )
}


// add address compoents
const AddAddress = () => {
  return (
    <div className='w-[85%] p-3 h-full backdrop-blur-md fixed flex '>

      <div className='w-[60%] h-screen '>
        <h1 className='text-2xl'><i className="ri-arrow-left-long-line"></i> back</h1>

      </div>
    </div>
  )
}


// main User address component ..
const UserAddress = () => {
  return (
    <div className='w-full min-h-screen relative flex flex-col items-center justify-center'>
      <h2 className='text-2xl p-3 absolute top-0 left-0'>Address</h2>
      <AddressNotFound />
      {/* <AddAddress /> */}
    </div>
  )
}

export default UserAddress