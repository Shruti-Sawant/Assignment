import React from 'react'
import { FaChevronDown } from "react-icons/fa";
function Footer() {
  return (
    <div className='h-[484px]  bg-slate-800'>
      <div className='max-w-5xl flex justify-center items-center py-3.5 m-auto text-white  '>
        <div className='flex justify-between items-center py-20 '>
        <ul className='md:mr-40 mx-4 gap-8'>
            <li className='my-3'>CATEGORIES</li>
            <li className='my-3'>Web Builder</li>
            <li className='my-3'>Hosting</li>
            <li className='my-3'>Data Center</li>
            <li className='my-3'>Robotic-Automation</li>
        </ul>
        <ul className='md:mx-40 '>
            <li className='my-3'>CONTACT</li>
            <li className='my-3'>Contact</li>
            <li className='my-3'>Privacy Policy</li>
            <li className='my-3'>Terms Of Service</li>
            <li className='my-3'>Categories</li>
            <li className='my-3'>About</li>
        </ul>
        <p className='flex ml-20 mr-2'>United State<FaChevronDown className='mt-2' /></p>
        </div>
       

      </div>
    </div>
  )
}

export default Footer