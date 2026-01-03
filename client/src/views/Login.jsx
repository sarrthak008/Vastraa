import React from 'react'
import LOGIIN_IMG from "../assets/login.jpeg"
import Navbar from '../components/Navbar'
import { login_Subtitle, login_Title } from '../../config/BRAND'
import AppInput from '../components/Inputs/AppInput'
import AppButton from '../components/Inputs/AppButton'
import FloatingInput from '../components/Inputs/FloatingInput'

const Login = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-screen overflow-hidden flex'>
        <div className='hidden w-[40vw] h-screen md:flex justify-center items-center path-1'>
          <div className='w-[100%] h-[100%]  overflow-hidden'>
            <img src={LOGIIN_IMG} className='w-full h-full object-cover'></img>
          </div>
        </div>
        <div className=' md:w-[50vw]  h-screen flex justify-center items-center flex-col'>
          <h3 className='text-black text-4xl logo-font text-center'>{login_Title}</h3>
          <span className='text-gray-400 text-md text-center'>{login_Subtitle}</span>
          <div className='w-[90%] md:w-[80%] lg:w-[60%] mt-10 '>
             <div className='flex flex-col gap-4'>
               <FloatingInput/>
               <FloatingInput/>
             </div>
            <span className='text-md text-purple-500 cursor-pointer mt-10 block mb-3'>Forgot password?</span>
            <AppButton title='login'/>

            {/* <div className='mt-20'>
              <HrWithTitle/>
            </div> */}

            <div className='mt-10 '>Don`t have an account? <span className='text-purple-500 cursor-pointer'>sign up</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login