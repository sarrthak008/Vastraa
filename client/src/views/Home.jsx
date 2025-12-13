import Navbar from '../components/Navbar'
import { brandName } from "../../config/BRAND"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ChatCircle from '../components/fashonXai/ChatCircle'
import BGIMG from "../assets/cloth_bg.png"
import sareImg from "../assets/heroimages/saree.jpeg"
import hoody from "../assets/heroimages/img1.jpeg"
import shirt from "../assets/heroimages/shirt1.jpeg"
import shirt1 from "../assets/heroimages/shirt2.jpeg"
import bgvid from "../assets/heroimages/bg1.mp4"
import bgvid1 from "../assets/heroimages/bg2.mp4"

const Home = () => {

    useGSAP(() => {

        let tl = gsap.timeline()

        tl.from(".hero-txt", {
            y: -100,
            opacity: 0,
            delay: 1,
            stagger: 0.2
        })

        tl.from(".hero", {
            opacity: 0,
            stagger: {
                amount: 0.5,
                grid: [1, 5],
                from: "center"
            }
        })

        tl.from(".support-txt", {
            y: 20,
            opacity: 0
        })

    }, [])

    return (
        <>
            <Navbar />

            {/* ==== first page code ===== */}

            <div className="min-h-[80vh] w-screen mt-20">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-6xl logo-font hero-txt text-center">Evalate your style with</h1>
                    <h1 className="text-6xl mt-2 logo-font hero-txt">{brandName}</h1>
                    <h4 className='text-pink-500 support-txt'>support with <span>Fashion ✘ AI</span></h4>
                </div>

                <div className="w-[95vw] mx-auto h-[80vh] flex gap-1.5 justify-center">

                    <div className='w-[18vw] h-full hero'>
                        <div className='w-full h-[55vh] bg-gray-500 rounded-3xl overflow-hidden'>
                            <img src={shirt1} className='h-full w-full object-cover' />
                        </div>
                        <div className='w-full h-[20vh] bg-gray-700 rounded-3xl mt-3 overflow-hidden'>
                            <img src={shirt} className='h-full w-full object-cover' />
                        </div>
                    </div>

                    <div className='flex h-full w-[18vw] items-end-safe hero'>
                        <div className='w-full h-[55vh] bg-gray-600 rounded-3xl overflow-hidden'>
                            <video autoPlay muted loop className='h-full w-full object-cover'>
                                <source src={bgvid}></source>
                            </video>
                        </div>
                    </div>

                    <div className='flex h-full w-[300px] items-center justify-center flex-col hero shrink-0'>
                        <div className='w-full h-[55vh] bg-gray-500 rounded-3xl'>

                        </div>
                        <button className='bg-black text-white w-full mt-4 rounded-4xl py-2 cursor-pointer'>explore</button>
                    </div>

                    <div className='flex h-full w-[18vw] items-end-safe hero'>
                        <div className='w-full h-[55vh] bg-gray-600 rounded-3xl overflow-hidden'>
                            <img src={hoody} className='h-full w-full object-cover' />
                        </div>
                    </div>

                    <div className='w-[18vw] h-full hero'>
                        <div className='w-full h-[55vh] bg-gray-600 rounded-3xl overflow-hidden'>
                            <video autoPlay muted loop className='h-full w-full object-cover overflow-hidden'>
                                <source src={bgvid1}></source>
                            </video>
                        </div>
                        <div className='w-full h-[20vh] bg-gray-400 rounded-3xl mt-3 overflow-hidden'>
                            <img src={sareImg} className='h-full w-full object-cover' />
                        </div>
                    </div>

                </div>
            </div>

            { /*=== SECOND PAGE CODE ===*/}

            <div className='h-[70vh] w-screen flex items-center mt-[10vh] justify-center relative overflow-hidden'>
                <img src={BGIMG} className='h-full w-full object-cover' />
            </div>


            <ChatCircle />
        </>
    )
}

export default Home