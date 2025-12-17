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

const UserDashboard = () => {
  const adminOpenPannelIndex = useSelector(state => state.ui.activeSideBarUserIndex);

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <UserSideBar />
      <div className='w-[85%] h-screen overflow-x-hidden overflow-y-scroll fixed right-0 top-0 hide-scrolbar px-2'>
        {adminOpenPannelIndex == 0 && <UserHome />}
        {adminOpenPannelIndex == 1 && <UserOrders />}
        {adminOpenPannelIndex == 2 && < UserAddress />}
        {adminOpenPannelIndex == 3 && <UserWishList />}
        {adminOpenPannelIndex == 4 && <UserPayment />}
        {adminOpenPannelIndex == 5 && <UserHelpDesk />}
        {adminOpenPannelIndex == 6 && <UserSetings />}
      </div>
      <ChatCircle/>
    </div>
  )
}

export default UserDashboard