import { createSlice } from "@reduxjs/toolkit";


// reducers 
import { handelProfilePageToggle, handelSidebarChnage, handelSidebarChnageForUsers } from "./uiReducer";

const initialState = {

    // for the admin 
     activeSideBar : localStorage.getItem("activeSideBarName") || "Dashboard",
     activeSideBarIndex: localStorage.getItem("activeSideBarIndex") || 0 ,

     // for the  user .
     activeSideBarUser : localStorage.getItem("activeSideBarUser") || "Dashboard",
     activeSideBarUserIndex: localStorage.getItem("activeSideBarUserIndex") || 0 ,

     // profile page 
    isProfilepageOpen : false

}


const uiSlice = createSlice({
    name :"ui",
    initialState : initialState,
    reducers:{
        setActiveSidebar : handelSidebarChnage,
        setActiveSidebarForUsers : handelSidebarChnageForUsers,
        setProfilePageToggle : handelProfilePageToggle
    }
})



export  const {setActiveSidebar , setActiveSidebarForUsers ,setProfilePageToggle } = uiSlice.actions;

export default uiSlice.reducer;