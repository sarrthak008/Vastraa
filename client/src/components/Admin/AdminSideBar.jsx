import React from 'react'
import { brandName } from '../../../config/BRAND'
import OPTIONS from '../../../config/AdminDashboardOptions'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSidebar } from '../../Features/ui/uiSlice'


const ProfileViwer =()=>{
    return(
        <div className='bg-black absolute translate-x-[5%] flex flex-col items-center justify-center bottom-[1%] rounded-md left-0 w-[90%] py-3'>
             <h3 className='bg-purple-500 w-[90%] py-1 text-center rounded-md cursor-pointer'>Profile</h3>
             <p className='text-gray-300 text-sm'> ~ fashion ✘ ai</p>
        </div>
    )
}



const AdminSideBar = () => {

      const dispatch = useDispatch();

      const OpenIndex = useSelector(state=> state.ui.activeSideBarIndex)

      const handelSidebarChnage = (index,name)=>{
        dispatch(setActiveSidebar({name,index}))
      }


  return (
    <div className='w-[15%] h-screen fixed top-0 left-0 bg-gray-800/20 px-2'>
         <h3 className='logo-font text-2xl mt-3'>{brandName}</h3>
         <div className='flex flex-col gap-6 mt-10 overflow-hidden'>
             {OPTIONS?.map((opt,index)=>{
                return(
                     <div key={index} className={`cursor-pointer whitespace-nowrap text-md ${OpenIndex == index ? 'bg-purple-500 text-white p-2 rounded-md ' : null } `} onClick={()=>handelSidebarChnage(index,opt?.name)}>
                         <i className={opt?.icon}/>
                         <span className='ml-2 md:inline-block hidden '>{opt?.name }</span>
                     </div>
                )
             })}
         </div>
         <ProfileViwer/>
    </div>
  )
}

export default AdminSideBar