import React from 'react'
import { brandName } from '../../../config/BRAND'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Popup = ({ children, className, title = brandName, rules = [], onclose = () => { } , onsave=()=>{}}) => {

    useGSAP(() => {
        gsap.from(
            ".popup",
            {
                opacity: 0,
                scale: 0.8,
                y: 50,
                duration:0.3
            })
    }, []);


    return (
        <div className={`popup ${className} bg-white relative rounded-2xl overflow-hidden shadow-2xl`}>
            <div className='bg-gray-200 w-full h-[9vh] border-b border-gray-400 p-1 text-2xl flex items-center'>{title}</div>
            <div className=' p-1 overflow-x-hidden'>
                {children}
            </div>
            <div className='flex ml-2 flex-col gap-0.5 text-sm mt-3 text-gray-600'>
                {rules?.map((rule, index) => (
                    <span key={index} className=''>{rule}<span className='text-red-500'>*</span></span>
                ))}
            </div>
            <div className='border-gray-300 mt-4 w-full gap-4 h-[9vh] border-t p-1 flex items-center justify-end'>
                <button className='bg-gray-200  py-[7px] px-10 text-md rounded-md cursor-pointer ' onClick={() => onclose()}>close</button>
                <button className='bg-purple-500  py-[7px] px-10 hover:bg-black hover:text-white text-md rounded-md cursor-pointer ' onClick={()=>onsave()}>save</button>
            </div>
        </div>
    )
}

export default Popup