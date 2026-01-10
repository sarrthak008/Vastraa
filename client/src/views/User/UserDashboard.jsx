import React from 'react'
import UserSideBar from '../../components/User/UserSideBar'
import { useSelector } from 'react-redux'
import UserHome from '../../components/User/UserHome';
import UserOrders from '../../components/User/UserOrders';
import UserAddress from '../../components/User/UserAddress';
import UserWishList from '../../components/User/UserWishList';
import UserPayment from '../../components/User/UserPayment';
import UserHelpDesk from '../../components/User/UserHelpDesk';
import UserSetings from '../../components/User/UserSetings';
import ChatCircle from '../../components/fashonXai/ChatCircle';
import Profile from "../../components/Profile"


const UserDashboard = () => {
  const adminOpenPannelIndex = useSelector(state => state.ui.activeSideBarUserIndex);
  const isToggleProfile = useSelector(state => state.ui.isProfilepageOpen)

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <UserSideBar />
      <div className=' w-screen md:w-[85%]   overflow-x-hidden overflow-y-scroll fixed right-0 top-0 hide-scrolbar px-2'>
        {adminOpenPannelIndex == 0 && <UserHome />}
        {adminOpenPannelIndex == 1 && <UserOrders />}
        {adminOpenPannelIndex == 2 && < UserAddress />}
           <div className='hidden md:block'>
              {adminOpenPannelIndex == 3 && <UserWishList /> }  
           </div>

           <div className='block md:hidden'>
              {adminOpenPannelIndex == 3 && <UserSetings /> }  
           </div>
        {adminOpenPannelIndex == 4 && <UserPayment />}
        {adminOpenPannelIndex == 5 && <UserHelpDesk />}
        {adminOpenPannelIndex == 6 && <UserSetings />}
      </div>
      <ChatCircle/>
      {isToggleProfile && <Profile/> }
    </div>
  )
}

export default UserDashboard