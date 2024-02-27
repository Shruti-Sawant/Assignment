import React from 'react'
import { TiTick } from "react-icons/ti";
function Title() {
  return (

    <div className='max-w-5xl  items-center py-3.5 m-auto '>
      <div class=" w-full text-4xl">Best Website Builder in the US</div>
      <div className='flex mt-2 border-b-2 border-gray-300 border-t-2 text-slate-300 py-2'>
        <TiTick className='mt-1' /> <span>Last Update - February 22,2020  </span>
        <p className='pl-7'>Advertising</p>
      </div>
      <div className='mt-2 '>
        <button className='md:pr-10 pl-4 bg-white '>Tool</button>
        <button className='md:px-10 px-10 bg-white'>AWS Builder</button>
        <button className='md:px-10 px-5 bg-white'>Star Build</button>
        <button className='md:px-10 px-1 bg-white'>Build Supplies</button>
        <button className='md:px-10 px-5 bg-white'>Tooling</button>
        <button className='md:pl-10 px-10 bg-white'>BlueHosting</button>
      </div>
      <p className='mt-2'><a href="">Home</a>{" > "}<a href="">Hosting for all</a>{" > "}<a href="">Hosting</a>{" > "}<a href="">Hosting6</a>{" > "}<a href="">Hosting5</a></p>
    </div>


  )
}

export default Title