import { Link } from "react-router-dom"
import { brandName } from "../../config/BRAND"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const Navbar = () => {

     useGSAP(()=>{
         gsap.from(".nav-iteams",{
            y:-100,
            opacity:0,
            stagger:0.1,
            duration:0.5
         })
     },[])
     

  return (
    <nav className="w-[90vw] h-12 mx-auto  flex items-center justify-between">
        <div>
             <h2 className="logo-font text-3xl nav-iteams">{brandName}</h2>
        </div>
        <div className="flex gap-7 items-center">
            <Link to={"/"} className="cursor-pointer nav-iteams">Home</Link>
            <Link to={"/"} className="cursor-pointer nav-iteams">Explore</Link>
            <Link to={"/"} className="cursor-pointer nav-iteams">Login</Link>
            <Link to={"/"} className="cursor-pointer nav-iteams bg-black text-white px-3 py-0.5 rounded-sm">Sign up</Link>
        </div>
    </nav>
  )
}

export default Navbar