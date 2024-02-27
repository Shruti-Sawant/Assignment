import React from 'react'
import { GiTrophyCup } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
function Batch({title, marks}) {
  return (
    <div >
       <p className='flex bg-orange-500 w-32 h-8 py-1 px-2 rounded-md'>{marks>9.5 ?<GiTrophyCup className='mt-1 mr-1'/>:<IoDiamondOutline className='mt-1 mr-1'/>} {title}</p>
    </div>
  )
}

export default Batch