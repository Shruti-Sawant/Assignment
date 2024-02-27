import React from 'react'
import { CiSearch } from "react-icons/ci";
function SignUp() {
  return (
    
         <div className='max-w-5xl flex justify-between items-center py-20  m-auto md:flex-row flex-col' >
            <p className='text-3xl ml-20'>Sign up and get exclusive  <br/> special deals</p>
            <form action="" className='flex ' >
                
                <input type="search" name='search' id='search' className='w-56 h-9 bg-white  border-none  px-4 py-1 text-grey-900 rounded-l-lg' />
                <span className=' w-20 flex justify-center items-center rounded-r-lg bg-blue-800 text-white'>
                   Sign up</span>
            </form>
        </div>
  
  )
}

export default SignUp