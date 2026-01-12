import React from 'react'
import { brandName, support } from '../../../config/BRAND'

const ImgContainer = ({ SRC = null, title = null, btn_title = brandName, onclick = () => null, isBtnActive = true }) => {
  return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
      {
        !SRC ?
          <div className='text-center' >
            <h2 className='logo-font text-6xl '>{brandName}</h2>
            <h4 className='text-pink-500 text-sm'> ~ {support}</h4>
          </div>
          :
          <>
            <div className='h-[250px] w-[250px]'>
              <img src={SRC} />
              {title && <p className='text-center mt-3 text-gray-400 text-sm'>{title}</p>}
            </div>

            {
              isBtnActive && <div className='mt-5'>
                <button className="btn cursor-pointer" onClick={() => onclick()}>{btn_title}</button>
              </div>
            }
          </>
      }

    </div>
  )
}

export default ImgContainer