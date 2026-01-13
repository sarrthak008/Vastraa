import React, { Children } from 'react'
import BlurBaground from './BlurBaground'
import Popup from './Popup'

const ConfirmBox = ({ title="confirm", children , onclose =()=>null}) => {
  return (
    <BlurBaground>
         <Popup  className={"w-[340px]"} save_btn_title='ok' onclose={()=>onclose()}>
             <div className='h-[80px] flex items-center justify-center'>
                 {children}
             </div>
         </Popup>
    </BlurBaground>
  )
}

export default ConfirmBox