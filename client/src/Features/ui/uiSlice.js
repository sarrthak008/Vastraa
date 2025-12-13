import { createSlice } from "@reduxjs/toolkit";


// reducers 
import { handelSidebarChnage } from "./uiReducer";

const initialState = {
     activeSideBar : localStorage.getItem("activeSideBarName") || "Dashboard",
     activeSideBarIndex: localStorage.getItem("activeSideBarIndex") || 0 
}


const uiSlice = createSlice({
    name :"ui",
    initialState : initialState,
    reducers:{
        setActiveSidebar : handelSidebarChnage
    }
})



export  const {setActiveSidebar} = uiSlice.actions;

export default uiSlice.reducer;