import React from 'react'
import View from './labels/View'
function Card() {
    return (
       
            <div className='w-80 h-[380px] bg-white flex-col justify-center items-center mx-2'>
                <div className='mx-20 mt-8'>  <img src="comp.png" alt="" /></div>
                <div className='mx-8 mt-10 text-blue-600'><button className='bg-gray-300 rounded-md px-1'>20% off</button> <button className=' bg-gray-300 px-1 rounded-md'>Limited Time</button></div>
                <p className='mx-20 text-black font-medium'>Webbuilder1</p>
                <p className='mx-8 mt-1 text-black'>Computer  Modern clasic with wix support</p>
                <span className='flex'><p className='mx-8 text-2xl'>$39.96</p> <p className='mt-2 mr-3'>$49.96</p>  <p className='text-red-500 text-sm mt-3'>(20%off)</p></span>
               <button className='bg bg-blue-700 w-full h-12 rounded-md mt-4 text-white'>View Deal</button>
            </div>
      
    )
}

export default Card