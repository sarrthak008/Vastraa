import React, { use, useState ,useEffect} from 'react'
import ADD_IMG from "../../assets/illustrations/adress.svg"
import AppButton from '../Inputs/AppButton'
import AppInput from '../Inputs/AppInput'
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import loadAddressFroMap from '../../../utils/AddressHandler';
import { toast } from 'sonner';

//show component if there is any address not avaliable not found.
const AddressNotFound = ({setisAddressModelOpen}) => {
  return (
    <>
      <div className='h-[350px] w-[350px]'>
        <img src={ADD_IMG} />
        <p className='text-center mt-3 text-gray-400 text-sm'>“Where should I send your parcel?”</p>
      </div>

      <div className=' '>
        <AppButton title='Add new address' varient='purple' onclick={()=>setisAddressModelOpen(true)}/>
      </div>
    </>
  )
}


// add address compoents
const AddAddress = ({setisAddressModelOpen}) => {
   
    const [addressdata,setAddressdata] = useState({tag:"", city:"", area:"", pincode:"" })
    const [position, setPosition] = useState(null);



  const handelAddressLoad = async ()=>{
        if(!addressdata.area || !addressdata.city || !addressdata.pincode){
          toast.error("please provide all filds");
          return;
        }
         let data =  await loadAddressFroMap(addressdata.pincode);
         setPosition([data.lat , data.lon])
    }

  function MapController({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, 12, {
        animate: true,
        duration: 2,
      });
    }
  }, [position, map]);

  return null;
  }


  return (
    <div className='w-screen md:w-[85%] p-3 h-full backdrop-blur-md fixed flex items-center justify-center '>

      <div className='w-[100%] h-[90%] gap-4 flex-col md:flex-row flex items-center  rounded-md bg-gray-200 p-2 overflow-y-scroll hide-scrolbar relative'>
        <div className='w-[90%] md:w-[60%] h-full py-4 md:p-0'>

          <h3 className='text-2xl'>Where i shift your parcel ?</h3>
          <div className='w-[99%] md:w-[90%]'><AppInput value={addressdata.tag} onchange={(txt)=>setAddressdata({...addressdata,tag:txt})} placeholder='Add tag eg: like #home , #office ' /></div>
          <div className='w-[99%] md:w-[90%]'><AppInput value={addressdata.city} onchange={(txt)=>setAddressdata({...addressdata,city:txt})} placeholder='nearst city eg: pune , lonanad' /></div>
          <div className='w-[99%] md:w-[90%]'><AppInput value={addressdata.area} onchange={(txt)=>setAddressdata({...addressdata,area:txt})} placeholder='area or village eg: morve, Bholi' /></div>
          <div className='w-[99%] md:w-[90%]'><AppInput value={addressdata.pincode} onchange={(txt)=>setAddressdata({...addressdata,pincode:txt})} placeholder='pincode eg: 412802' /></div>
                
                 {/* instructions div here */}
                    <div className='text-sm text-gray-500 flex flex-col'>
                        <span>add valid address</span>
                        <span>if your address not find add nearst address</span>
                        <span>village or area not avaliable add just your city</span>
                    </div>

          <div className='mt-10 w-[90%] md:w-[50%]'><AppButton  onclick={()=>handelAddressLoad()} varient='purple' title='Save address' /></div>
        </div>

        <div className='w-[40%] hidden md:block h-full overflow-hidden rounded-xl'>
          <MapContainer
            center={[20.5937, 78.9629]}
            zoomControl={false}
            zoom={5}
            style={{ height: "100%", marginTop: "0" , position:'relative' , zIndex:"10" }}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {position && <Marker position={position} />}
            <MapController position={position} />
          </MapContainer>
        </div>
        
        <div className='absolute top-0 right-0 z-[100] bg-red-400 w-[30px] flex text-xl cursor-pointer items-center justify-center h-[30px]' onClick={()=>setisAddressModelOpen(false)}><i className="ri-close-line"></i></div>
      </div>

    </div>
  )
}


// main User address component ..
const UserAddress = () => {

   const [isAddressModelOpen , setisAddressModelOpen ] = useState(false);

  return (
    <div className='w-full min-h-screen relative flex flex-col  items-center justify-center'>
      {/* <h2 className='text-2xl p-3 absolute top-0 left-0'>Address</h2> */}
      <AddressNotFound setisAddressModelOpen={setisAddressModelOpen}/>
      
      {isAddressModelOpen && <AddAddress setisAddressModelOpen={setisAddressModelOpen}/>}
    </div>
  )
}

export default UserAddress