import { Children, createContext, useContext, useState } from "react";

let Store = createContext()

const StoreProvide = ({children}) =>{
  
    const [role,setRole] = useState("admin")

     return(
         <Store.Provider value={{role}}>
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