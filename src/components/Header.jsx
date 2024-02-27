import React, {useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
function Header() {
  let [open , setOpen]=useState(false);
 
  return (
    <header className=' bg-current '>
      <div className='max-w-5xl flex justify-center items-center py-3.5 m-auto '>
        <form action="" className='flex ' >
          <span className=' w-8 bg-white flex justify-center items-center rounded-l-lg'>
            <CiSearch /></span>
          <input type="search" name='search' id='search' className='w-56 h-9 bg-white  border-none  px-4 py-1 text-grey-900 rounded-r-lg' />
        </form>
        <div className={`md:static absolute bg-black md:min-h-fit ${open?'top-16' :' top-[-100%]' } md:w-auto w-full items-center px-5`}>
          <ul className=' text-white flex gap-5 md:gap-[4vw] md:items-center list-none mx-14 md:flex-row flex-col'>
            <li className='mx-6 '><a href="">Categories</a></li>
            <li className='mx-6'><a href="">Website Builders</a></li>
            <li className='mx-6'><a href="">Today's deal</a></li>
          </ul>
        </div>
        <div onClick={()=>setOpen(!open)} className='ml-5 md:hidden '>
        <ion-icon name={open ? 'close': 'menu'}  style={{color:"white", fontSize: "1.875rem" }}></ion-icon>
         </div> 
      </div>
    </header>
  )
}

export default Header