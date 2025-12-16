


const handelSidebarChnage = (state,action) =>{
    try {

          // store value to avoid refresh zero index 
          localStorage.setItem("activeSideBarIndex",action.payload.index);
          localStorage.setItem("activeSideBarName",action.payload.name);
          // update state
          state.activeSideBar = action.payload.name;
          state.activeSideBarIndex = action.payload.index;


    } catch (error) {
        console.error(error)
    }
}


const handelSidebarChnageForUsers = (state,action) =>{
    try {

          // store value to avoid refresh zero index 
          localStorage.setItem("activeSideBarUserIndex",action.payload.index);
          localStorage.setItem("activeSideBarUser",action.payload.name);
          // update state
          state.activeSideBarUser = action.payload.name;
          state.activeSideBarUserIndex = action.payload.index;


    } catch (error) {
        console.error(error)
    }
}

export {handelSidebarChnage , handelSidebarChnageForUsers}