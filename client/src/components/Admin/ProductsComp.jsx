import React, { useEffect ,useState} from 'react'
import Upoader from '../fashonXai/Upoader'
import uploadtoCloud from '../../../config/uploadToCloud'

const ProductsComp = () => {


 const [file1,setFile1] = useState(null);


  return (
   <>
    <div className='w-[80vw] h-[50vh] bg-gray-300 rounded-xl flex overflow-hidden m-2 p-2'>
        <div className='w-[40%] h-[100%]'>
           <Upoader file={file1} setFile={setFile1} id="1"/>
        </div>
        <div className='w-[30%] h-[100%]'>
           <div className='h-[50%] w-[100%]'>
             <Upoader/>
           </div>
           <div className='h-[50%] w-[100%] '>
            <Upoader/>
           </div>
        </div>
        <div className='w-[30%] h-[100%]'>
          <div className='h-[50%] w-[100%]'>
             <Upoader/>
          </div>
           <div className='h-[50%] w-[100%]'>
              <Upoader/>  
           </div>
        </div>
    </div>
      <p className='text-md ml-2'>please select right images<span className='text-red-500'>*</span></p>
   </>
  )
}

export default ProductsComp