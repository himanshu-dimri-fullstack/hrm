import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
    return (
        <nav className='bg-orange-400 h-[10vh] w-screen px-10'>
            <div className='flex justify-end items-center h-full'>
                <div className='flex items-center gap-2 bg-[#222]/30 backdrop-blur-xl p-2 rounded-xl cursor-pointer'>
                    <div className='flex justify-center items-center h-7.5 w-7.5 bg-white rounded-[50%] text-orange-400'>
                        <span className='text-xl font-semibold'>H</span>
                    </div>
                    <div className='flex gap-1 items-center text-white'>
                        <h2 className='text-white font-semibold'>Himanshu</h2>
                        <IoMdArrowDropdown />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar