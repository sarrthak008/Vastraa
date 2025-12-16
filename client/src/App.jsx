import { useState } from "react"
import "./App.css"
import { BrowserRouter ,Routes , Route } from "react-router-dom"
import Home from "./views/Home"
import Notfound from "./views/Notfound"
import {MainLoader} from "./components/Loader"
import axios from "axios"
import { useEffect } from "react"
import Login from "./views/Login"
import { Toaster } from "sonner"
import Signup from "./views/Signup"
import AdminDashboard from "./views/Admin/AdminDashboard"
import Explore from "./views/Explore"
import UserDashboard from "./views/User/UserDashboard"
// load backedn url
const FASHION_AI_API = import.meta.env.VITE_FASHION_X_AI;

const App = () => {


  return (
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<Signup/>} />
           <Route path="/admin" element={<AdminDashboard/>} />
           <Route path="/explore" element={<Explore/>}/>
           <Route path="/dashboard" element ={<UserDashboard/>} />
           <Route path="*" element={<Notfound/>} />
       </Routes>
       <Toaster theme="dark"/>
    </BrowserRouter>
  )
}

export default App