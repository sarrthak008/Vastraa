
const handelSidebarChnage = (state,action) =>{
    try {
          // store value to avoid refresh zero index 
          localStorage.setItem("activeSideBarIndex",action.payload.index);
          localStorage.setItem("activeSideBarName",action.payload.name);
          // update state
          state.activeSideBar = action.payload.name;
          state.activeSideBarIndex = action.payload.index;
    } catch (error) {
        
    }
}


export {handelSidebarChnage}