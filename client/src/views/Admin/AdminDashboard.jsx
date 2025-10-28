import React from 'react'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import { useStore } from '../../context/Store';
import DashboardComp from '../../components/Admin/DashboardComp';
import OrdersComp from '../../components/Admin/OrdersComp';
import ProductsComp from '../../components/Admin/ProductsComp';
import PaymentsComp from '../../components/Admin/PaymentsComp';
import SettingComp from '../../components/Admin/SettingComp';
import ChatComp from '../../components/Admin/ChatComp';
import CustomersComp from '../../components/Admin/CustomersComp';
import DeliveryComp from '../../components/Admin/DeliveryComp';

const AdminDashboard = () => {
    const {adminOpenPannelIndex,setAdminOpenPannelIndex} = useStore();

  return (
    <div className='h-screen w-screen overflow-hidden'>
         <AdminSideBar/>
         <div className='w-[85%] h-screen overflow-x-hidden overflow-y-scroll fixed right-0 top-0 hide-scrolbar px-2'>
            {adminOpenPannelIndex == 0 && <DashboardComp/>}
            {adminOpenPannelIndex == 1 && <CustomersComp/>}
            {adminOpenPannelIndex == 2 && <ProductsComp/>}
            {adminOpenPannelIndex == 3 && <PaymentsComp/>}
            {adminOpenPannelIndex == 4 && <ChatComp/>}
            {adminOpenPannelIndex == 5 && <OrdersComp/>}
            {adminOpenPannelIndex == 6 && <DeliveryComp/>}
            {adminOpenPannelIndex == 7 && <SettingComp/>}
         </div>
    </div>
  )
}

export default AdminDashboard