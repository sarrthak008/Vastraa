import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     role : "user"
}

const authSlice  = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : {

    }

})


export const { } = authSlice.actions;

export default authSlice.reducer;