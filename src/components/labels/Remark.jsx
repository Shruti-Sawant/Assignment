import React from 'react'
import { IoStar } from "react-icons/io5";
function Remark({marks, tag}) {
  return (
    <div className='w-32 h-28 bg-sky-100'>
        <div className='px-7 py-3'>
        <p className='text-3xl px-4'>{marks}</p>
        <p className='my-2'>{tag}</p>
        <span className='flex text-yellow-500'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span>
        </div>
        
        
    </div>
  )
}

export default Remark