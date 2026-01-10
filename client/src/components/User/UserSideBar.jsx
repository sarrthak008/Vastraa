import React from 'react'
import { brandName } from '../../../config/BRAND'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSidebarForUsers, setProfilePageToggle } from '../../Features/ui/uiSlice'
import { USER_DASHBOARD_OPTIONS, USER_DASHBOARD_OPTIONS_MOBILE } from '../../../config/UserDashboardOptions'
import BlurBaground from '../Containers/BlurBaground'



const ProfileViwer = () => {

   const dispatch = useDispatch();

   const handelToaggle = ()=>{
      dispatch(setProfilePageToggle({isopen:true}))
   }

  return (
    <>
      <div className='bg-black absolute translate-x-[5%] flex flex-col items-center justify-center bottom-[1%] rounded-md left-0 w-[90%] py-3'>
        <h3 className='bg-purple-500 w-[90%] py-1 text-center rounded-md cursor-pointer' onClick={()=>handelToaggle()}>Profile</h3>
        <p className='text-gray-300 text-sm'> ~ fashion ✘ ai</p>
      </div>
    </>
  )
}



const UserSideBar = () => {

  const dispatch = useDispatch();

  const OpenIndex = useSelector(state => state.ui.activeSideBarUserIndex)

  const handelSidebarChnage = (index, name) => {
    dispatch(setActiveSidebarForUsers({ name, index }))
  }


  return (
    <>
      {/* // code for desktop and tablate  UI   */}
      <div className='w-[15%] h-screen fixed top-0 left-0 bg-gray-800/20 px-2 hidden md:block'>
        <h3 className='logo-font text-2xl mt-3'>{brandName}</h3>
        <div className='flex flex-col gap-6 mt-10 overflow-hidden'>
          {USER_DASHBOARD_OPTIONS?.map((opt, index) => {
            return (
              <div key={index} className={`cursor-pointer whitespace-nowrap text-md ${OpenIndex == index ? 'bg-purple-500 text-white p-2 rounded-md ' : null} `} onClick={() => handelSidebarChnage(index, opt?.name)}>
                <i className={opt?.icon} />
                <span className='ml-2 md:inline-block hidden '>{opt?.name}</span>
              </div>
            )
          })}
        </div>
        <ProfileViwer />
      </div>


      {/* // write a code for mobile  */}


      <div className='w-screen h-[8vh] flex items-center z-30  fixed bottom-0 left-0 bg-gray-800/20  md:hidden'>
        {/* <h3 className='logo-font text-2xl mt-3'>{brandName}</h3> */}
        <div className='flex gap-6 h-full  w-full overflow-hidden items-center justify-evenly'>
          {USER_DASHBOARD_OPTIONS_MOBILE?.map((opt, index) => {
            return (
              <div key={index} className={`cursor-pointer  whitespace-nowrap text-md ${OpenIndex == index ? 'bg-purple-500  h-[40px] w-[40px] flex items-center justify-center text-white p-2 rounded-full ' : null} `} onClick={() => handelSidebarChnage(index, opt?.name)}>
                <i className={`${opt?.icon} text-[20px]`} />
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default UserSideBar