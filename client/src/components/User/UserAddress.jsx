import React, { use, useState, useEffect } from 'react'
import ADD_IMG from "../../assets/illustrations/adress.svg"
import AppButton from '../Inputs/AppButton'
import BlurBaground from "../Containers/BlurBaground"
import ADDRESS_RULES from '../../../config/AddressRules'
import { toast } from 'sonner';
import FloatingInput from '../Inputs/FloatingInput';
import Popup from '../Containers/Popup';
import ImgContainer from '../Containers/ImgContainer'
import ConfirmBox from '../Containers/ConfirmBox'




const AddressCard = () => {

  const emojis = ["🏢", "😀", "😎", "🚀", "💼", "👨‍💻", "👩‍💻", "📍"];

  const [emoji, setEmoji] = useState("🏢");
  const [isConfirmBoxActive, setIsConfirmBoxActive] = useState(false);

  useEffect(() => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
  }, []);

  return (
    <>
      <div  onClick={()=>setIsConfirmBoxActive(true)} className="relative w-[420px] cursor-pointer bg-white rounded-2xl shadow-lg p-4">

        {/* Header */}
        <div className="flex items-center gap-3">

          {/* Profile Circle */}
          <div className="w-[50px] h-[50px] relative rounded-full 
                      border-2 border-green-500
                      bg-gradient-to-br from-purple-500 to-blue-500
                      flex items-center justify-center text-2xl text-white">
            {emoji}

            {/* Default Mark */}
            {true && (
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full 
                          bg-green-500 text-white flex items-center justify-center text-sm">
                <i className="ri-check-line"></i>
              </div>
            )}
          </div>

          <h2 className="text-xl font-bold text-gray-900">Office</h2>
        </div>

        {/* Details */}
        <div className="mt-6 space-y-2 text-sm text-gray-700">

          {/* Address */}
          <div className="flex items-start gap-3">
            <i className="ri-map-pin-2-fill text-lg text-blue-600"></i>
            <p>2nd Floor, Tech Park, Pune</p>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3">
            <i className="ri-phone-fill text-lg text-green-600"></i>
            <p>+91 98765 43210</p>
          </div>

          {/* Pincode */}
          <div className="flex items-center gap-3">
            <i className="ri-mail-send-fill text-lg text-purple-600"></i>
            <p>411001</p>
          </div>

        </div>
      </div>
      {isConfirmBoxActive && <ConfirmBox onclose={()=>setIsConfirmBoxActive(false)}>
        <h1 className='text-xl'>set as default address !</h1>
      </ConfirmBox>}
    </>

  );


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
          <div className=' w-[95%] md:w-[50%] h-full  '>
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
    <div className='w-full min-h-screen relative p-2'>
      <div className='fixed right-[2%] z-[10]'>
        <button className='btn' onClick={() => setisAddressModelOpen(true)} >+ Add Address</button>
      </div>

      {/* <h2 className='text-2xl p-3 absolute top-0 left-0'>Address</h2> */}
      {/* <ImgContainer SRC={ADD_IMG} title={"add address here.."} btn_title='add new address' onclick={() => setisAddressModelOpen(true)} /> */}

      <AddressCard />
      {/* <ConfirmBox/> */}

      {isAddressModelOpen && <AddAddress setisAddressModelOpen={setisAddressModelOpen} />}
    </div>
  )
}

export default UserAddress