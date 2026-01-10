import React, { use, useState, useEffect } from 'react'
import ADD_IMG from "../../assets/illustrations/adress.svg"
import AppButton from '../Inputs/AppButton'
import BlurBaground from "../Containers/BlurBaground"
import ADDRESS_RULES from '../../../config/AddressRules'
import { toast } from 'sonner';
import FloatingInput from '../Inputs/FloatingInput';
import Popup from '../Containers/Popup';
import ImgContainer from '../Containers/ImgContainer'

//show component if there is any address not avaliable not found.
const AddressNotFound = ({ setisAddressModelOpen }) => {
  return (
    <>
      <div className='h-[250px] w-[250px]'>
        <img src={ADD_IMG} />
        <p className='text-center mt-3 text-gray-400 text-sm'>“Where should I send your parcel?”</p>
      </div>

      <div className=''>
        <AppButton title='Add new address' className='px-2' varient='purple' onclick={() => setisAddressModelOpen(true)} />
      </div>
    </>
  )
}


// add address compoents
const AddAddress = ({ setisAddressModelOpen }) => {
const [addressdata, setAddressdata] = useState({ tag: "", city: "", area: "", pincode: "", phonenumber: "" })

const handelAddressLoad = async () => {
  
    if (!addressdata.area || !addressdata.city || !addressdata.pincode || !addressdata.phonenumber || !addressdata.tag) {
      toast.error("please provide all filds");
      return;
    }

    console.log(addressdata)
  }

  return (
    <BlurBaground>
      <Popup className={'bg-white min-h-[55vh] w-[95%] md:w-[70vw]'} title='Address' rules={ADDRESS_RULES} onclose={() => setisAddressModelOpen(false)} onsave={() => handelAddressLoad()} >
        <div className='w-full flex flex-col md:flex-row gap-3'>
          <div className= ' w-[95%] md:w-[50%] h-full  '>
            <FloatingInput label='tag' value={addressdata.tag} onChange={(txt) => setAddressdata({ ...addressdata, tag: txt })} />
            <FloatingInput label='village/area' value={addressdata.area} onChange={(txt) => setAddressdata({ ...addressdata, area: txt })} />
            <FloatingInput label='phone number' value={addressdata.phonenumber} onChange={(txt) => setAddressdata({ ...addressdata, phonenumber: txt })} />
          </div>
          <div className=' w-[95%] md:w-[40%]'>
            <FloatingInput label='city' value={addressdata.city} onChange={(txt) => setAddressdata({ ...addressdata, city: txt })} />
            <FloatingInput label='pincode' value={addressdata.pincode} onChange={(txt) => setAddressdata({ ...addressdata, pincode: txt })} />
          </div>
        </div>
      </Popup>
    </BlurBaground>
  )
}


// main User address component ..
const UserAddress = () => {

  const [isAddressModelOpen, setisAddressModelOpen] = useState(false);

  return (
    <div className='w-full min-h-screen relative flex flex-col  items-center justify-center'>
      {/* <h2 className='text-2xl p-3 absolute top-0 left-0'>Address</h2> */}
      <ImgContainer SRC={ADD_IMG} title={"add address here.."} btn_title='add new address' onclick={() => setisAddressModelOpen(true)} />

      {isAddressModelOpen && <AddAddress setisAddressModelOpen={setisAddressModelOpen} />}
    </div>
  )
}

export default UserAddress