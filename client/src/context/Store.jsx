import { Children, createContext, useContext } from "react";

let Store = createContext()

const StoreProvide = ({children}) =>{

    let count = 0 

     return(
         <Store.Provider value={{count}}>
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