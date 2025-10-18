
import { useState } from "react"
import "./App.css"
import { BrowserRouter ,Routes , Route } from "react-router-dom"
import Home from "./views/Home"
import Notfound from "./views/Notfound"
import {MainLoader} from "./components/Loader"
import axios from "axios"
import { useEffect } from "react"
import Login from "./views/Login"
// load backedn url
const FASHION_AI_API = import.meta.env.VITE_FASHION_X_AI;

const App = () => {
  
  const [ping,setPing] = useState(true);

  const loadPingApi =async ()=>{
     try {
       const result = await axios.get(`${FASHION_AI_API}/api/ping`);
         if(result.status == 200){
          setPing(false)
         }
     } catch (error) {
       console.error(error)
     }
  }

  useEffect(()=>{
    loadPingApi()
  },[])

  return (
    <BrowserRouter>
    {ping && <MainLoader/>}
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>} />
           <Route path="*" element={<Notfound/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App