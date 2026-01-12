import React, { Children } from 'react'
import BlurBaground from './BlurBaground'
import Popup from './Popup'

const ConfirmBox = ({ title="confirm", children}) => {
  return (
    <BlurBaground>
         <Popup  className={"w-[340px]"} save_btn_title='ok'>
             <div className='h-[80px] flex items-center justify-center'>
                 {children}
             </div>
         </Popup>
    </BlurBaground>
  )
}

export default ConfirmBox