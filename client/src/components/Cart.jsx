import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cart = ({ isOpen, onClose }) => {
  const cartRef = useRef()
  const overlayRef = useRef()

useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
      })

      gsap.fromTo(
        cartRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.5, ease: 'power3.out' }
      )
    } else {
      gsap.to(cartRef.current, {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
      })

      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.3,
      })
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none z-[999]"
      />

      {/* Cart Panel */}
      <div
        ref={cartRef}
        className="fixed right-0 top-0 z-[1000] h-screen w-[95vw] md:w-[50vw] max-w-[500px] bg-white shadow-2xl p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 cursor-pointer hover:text-black text-xl"
          >
            ✕
          </button>
        </div>


      </div>
    </>
  )
}

export default Cart
