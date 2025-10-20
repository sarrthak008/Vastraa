import React from 'react'
import SIGNUP_IMG from "../assets/signup.jpeg"
import Navbar from '../components/Navbar'
import { signup_Subtitle, signup_Title } from '../../config/BRAND'
import AppInput from '../components/Inputs/AppInput'
import AppButton from '../components/Inputs/AppButton'
import HrWithTitle from '../components/HrWithTitle'


const Signup = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-screen overflow-hidden flex'>

        <div className='hidden w-[40vw] h-screen md:flex justify-center items-center path-1'>
          <div className='w-[100%] h-[100%]  overflow-hidden'>
            <img src={SIGNUP_IMG} className='w-full h-full object-cover'></img>
          </div>
        </div>

        <div className='w-[100vw] md:w-[50vw] mt-10  h-screen flex justify-center items-center flex-col'>
          <h3 className='text-black text-4xl logo-font text-center'>{signup_Title}</h3>
          <span className='text-gray-400 text-md text-center'>{signup_Subtitle}</span>
          <div className='w-[90%] md:w-[80%] lg:w-[60%] mt-10'>
            <AppInput placeholder='username or email' type='text' />
            <AppInput placeholder='mobile number ' type='number' />
            <AppInput placeholder='password ' type='password' />
            <AppButton title='sign up' />

            <div className='mt-4'>already have an account? <span className='text-purple-500 cursor-pointer'>log in</span></div>
            <div className='mt-10'>
              <HrWithTitle title="join us with" />
            </div>

            {/* another option */}

            <div className='flex items-center justify-center mt-6 text-2xl gap-10 text-gray-400'>
              <span className='bg-gray-200/50 p-1 rounded-md'><i className="ri-google-fill"></i></span>
              <span className='bg-gray-200/50 p-1 rounded-md'><i className="ri-facebook-fill"></i></span>
              <span className='bg-gray-200/50 p-1 rounded-md'><i className="ri-phone-fill"></i></span>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup