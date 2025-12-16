import { createSlice } from "@reduxjs/toolkit";


// reducers 
import { handelSidebarChnage, handelSidebarChnageForUsers } from "./uiReducer";

const initialState = {

    // for the admin 
     activeSideBar : localStorage.getItem("activeSideBarName") || "Dashboard",
     activeSideBarIndex: localStorage.getItem("activeSideBarIndex") || 0 ,

     // for the  user .
     activeSideBarUser : localStorage.getItem("activeSideBarUser") || "Dashboard",
     activeSideBarUserIndex: localStorage.getItem("activeSideBarUserIndex") || 0 ,

}


const uiSlice = createSlice({
    name :"ui",
    initialState : initialState,
    reducers:{
        setActiveSidebar : handelSidebarChnage,
        setActiveSidebarForUsers : handelSidebarChnageForUsers
    }
})



export  const {setActiveSidebar , setActiveSidebarForUsers } = uiSlice.actions;

export default uiSlice.reducer;