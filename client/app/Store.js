import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../src/Features/ui/uiSlice";
import authReducer from "../src/Features/userauth/authSlice"

const Store = configureStore({
    reducer:{
       ui:uiReducer,
       auth: authReducer
    }
})

export default Store;