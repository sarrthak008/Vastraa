import React from 'react'
import LOGIIN_IMG from "../assets/login.jpeg"
import Navbar from '../components/Navbar'
import { login_Subtitle, login_Title } from '../../config/BRAND'
import AppInput from '../components/Inputs/AppInput'
import AppButton from '../components/Inputs/AppButton'
import HrWithTitle from '../components/HrWithTitle'

const Login = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-screen overflow-hidden flex'>
        <div className='w-[40vw] h-screen flex justify-center items-center path-1'>
          <div className='w-[100%] h-[100%]  overflow-hidden'>
            <img src={LOGIIN_IMG} className='w-full h-full object-cover'></img>
          </div>
        </div>
        <div className='w-[50vw]  h-screen flex justify-center items-center flex-col'>
          <h3 className='text-black text-4xl logo-font'>{login_Title}</h3>
          <span className='text-gray-400 text-md'>{login_Subtitle}</span>
          <div className='w-[70%]'>
            <AppInput placeholder='username or email' type='text'/>
            <AppInput placeholder='password ' type='password' />
            <span className='text-md text-purple-500 cursor-pointer mt-10 block'>Forgot password?</span>
            <AppButton />

            {/* <div className='mt-20'>
              <HrWithTitle/>
            </div> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Login