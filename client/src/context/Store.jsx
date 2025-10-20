import { Children, createContext, useContext, useState } from "react";

let Store = createContext()

const StoreProvide = ({children}) =>{
  
    const [role,setRole] = useState("admin");
    const [adminOpenPannelIndex,setAdminOpenPannelIndex] = useState(0)

     return(
         <Store.Provider value={{
            role,
            adminOpenPannelIndex,setAdminOpenPannelIndex
        }}>
             {children}
         </Store.Provider>
     )
}

const useStore = ()=>{
    return useContext(Store)
}

export {
    useStore,
    StoreProvide
}