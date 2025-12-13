import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../src/Features/ui/uiSlice";

const Store = configureStore({
    reducer:{
       ui:uiReducer
    }
})

export default Store;