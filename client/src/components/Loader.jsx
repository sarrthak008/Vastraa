import { useGSAP } from "@gsap/react"
import { brandName } from "../../config/BRAND"
import gsap from "gsap"



const MainLoader = () =>{

   useGSAP(()=>{
      gsap.to(".loader",{
        left:"100%",
        duration:1.5,
        // opacity:0,
        delay:0.2,
        repeat:-1
      })
   },[])

  return(
     <div className="h-screen w-screen fixed top-0 left-0 bg-white flex items-center justify-center flex-col z-[99999999]">
         <h1 className="logo-font text-6xl">{brandName}</h1>
         <div className="h-[3px] w-[150px] bg-gray-400 mt-3 rounded-3xl overflow-hidden relative">
           <div className="loader w-[60px] bg-gray-800 h-full left-0 absolute"></div>
         </div>
     </div>
  )
}


export {MainLoader}