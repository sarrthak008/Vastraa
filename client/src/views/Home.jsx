import Navbar from '../components/Navbar'
import { brandName } from "../../config/BRAND"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ChatCircle from '../components/fashonXai/ChatCircle'
import Upoader from '../components/fashonXai/Upoader'
import { useEffect, useRef } from 'react'

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



const words = ["Quality.", "Innovation.", "Creativity.", "Excellence."];
  const textRef = useRef(null);
  const wordIndex = useRef(0);

  useGSAP(() => {
    const el = textRef.current;

    const changeWord = () => {
      gsap.to(el, {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          wordIndex.current = (wordIndex.current + 1) % words.length;
          el.textContent = words[wordIndex.current];
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
          );
        },
      });
    };
    const interval = setInterval(changeWord, 3000);
    return () => clearInterval(interval);
  }, []);

    return (
        <>
            <Navbar />

            {/* ==== first page code ===== */}

            <div className="min-h-[80vh] w-screen mt-20">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="text-6xl logo-font hero-txt">Evalate your style with</h1>
                    <h1 className="text-6xl mt-2 logo-font hero-txt">{brandName}</h1>
                    <h4 className='text-pink-500 support-txt'>support with <span>Fashion ✘ AI</span></h4>
                </div>

                <div className="w-[95vw] mx-auto h-[80vh] flex gap-1.5 justify-center">

                    <div className='w-[18vw] h-full hero'>
                        <div className='w-full h-[55vh] bg-gray-500 rounded-3xl'>

                        </div>
                        <div className='w-full h-[20vh] bg-gray-700 rounded-3xl mt-3'>

                        </div>
                    </div>

                    <div className='flex h-full w-[18vw] items-end-safe hero'>
                        <div className='w-full h-[55vh] bg-gray-600 rounded-3xl'>

                        </div>
                    </div>

                    <div className='flex h-full w-[300px] items-center justify-center flex-col hero shrink-0'>
                        <div className='w-full h-[55vh] bg-gray-500 rounded-3xl'>

                        </div>
                        <button className='bg-black text-white w-full mt-4 rounded-4xl py-2 cursor-pointer'>explore</button>
                    </div>

                    <div className='flex h-full w-[18vw] items-end-safe hero'>
                        <div className='w-full h-[55vh] bg-gray-600 rounded-3xl'>

                        </div>
                    </div>

                    <div className='w-[18vw] h-full hero'>
                        <div className='w-full h-[55vh] bg-gray-600 rounded-3xl'>

                        </div>
                        <div className='w-full h-[20vh] bg-gray-400 rounded-3xl mt-3'>

                        </div>
                    </div>

                </div>
            </div>

            { /*=== SECOND PAGE CODE ===*/}

            <div className='h-screen w-screen flex items-center justify-center relative'>
                <h2 className="text-6xl  logo-font whitespace-nowrap">
                     We make{" "}
                    <span ref={textRef} className="text-purple-500">
                        Quality
                    </span>
                </h2>
            </div>


            <ChatCircle />
        </>
    )
}

export default Home