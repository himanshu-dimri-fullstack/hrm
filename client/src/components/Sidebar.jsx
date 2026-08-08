import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUserGroup } from "react-icons/fa6";
import { MdSettingsApplications } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className='w-[15vw] h-screen bg-white rounded-br-4xl rounded-tr-4xl shadow-xl'>
            <h1 className='text-2xl text-orange-500 font-bold text-center pt-5'>HD HRM</h1>

            <div className='pt-5'>
                <div className='flex gap-2 items-center border-b border-b-orange-500 text-[#222]'>
                    <FaSearch className='shrink-0 mt-1 pl-3 text-3xl' />
                    <input placeholder='search' className='text-md outline-none' />
                </div>
                <ul className='mt-5 w-[80%] text-[#222]'>
                    <li className='bg-orange-400 rounded-tr-2xl text-white rounded-br-2xl hover:bg-orange-400 hover:text-white py-1 mt-1'>
                        <Link to="" className='flex gap-2 items-center'>
                            <FaHome className='shrink-0 pl-3 text-3xl' />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className='hover:bg-orange-400 hover:text-white py-1 rounded-tr-2xl rounded-br-2xl mt-1'>
                        <Link to="" className='flex gap-2 items-center'>
                            <FaUserGroup className='shrink-0 pl-3 text-3xl' />
                            <span>PIM</span>
                        </Link>
                    </li>
                    <li className='hover:bg-orange-400 hover:text-white py-1 rounded-tr-2xl rounded-br-2xl mt-1'>
                        <Link to="" className='flex gap-2 items-center'>
                            <MdSettingsApplications className='shrink-0 pl-3 text-3xl' />
                            <span>Leave</span>
                        </Link>
                    </li>
                    <li className='hover:bg-orange-400 hover:text-white py-1 rounded-tr-2xl rounded-br-2xl mt-1'>
                        <Link to="" className='flex gap-2 items-center'>
                            <FaClock className='shrink-0 pl-3 text-3xl' />
                            <span>Time</span>
                        </Link>
                    </li>
                    <li className='hover:bg-orange-400 hover:text-white py-1 rounded-tr-2xl rounded-br-2xl mt-1'>
                        <Link to="" className='flex gap-2 items-center'>
                            <FaUserCog className='shrink-0 pl-3 text-3xl' />
                            <span>My Info</span>
                        </Link>
                    </li>
                    <li className='hover:bg-orange-400 hover:text-white py-1 rounded-tr-2xl rounded-br-2xl mt-1'>
                        <Link to="" className='flex gap-2 items-center'>
                            <IoSettings className='shrink-0 pl-3 text-3xl' />
                            <span>Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar