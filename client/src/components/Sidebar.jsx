import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaUserGroup } from "react-icons/fa6";
import { MdSettingsApplications } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {

    const [active, setActive] = useState(true);

    return (
        <div className='w-[15vw] h-screen bg-white rounded-br-4xl rounded-tr-4xl shadow-xl'>
            <h1 className='text-2xl text-orange-500 font-bold text-center pt-5'>HD HRM</h1>
            <div className='pt-5'>
                <div className='flex gap-2 items-center border-b border-b-orange-500 text-[#222]'>
                    <FaSearch className='shrink-0 mt-1 pl-3 text-3xl' />
                    <input placeholder='search' className='text-md outNavLinkne-none' />
                </div>
                <div className='mt-5 w-[80%] text-[#222]'>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `block py-1 rounded-tr-2xl rounded-br-2xl mt-1 hover:bg-orange-400 hover:text-white ${isActive ? 'bg-orange-400 text-white' : ''
                            }`
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <FaHome className='shrink-0 pl-3 text-3xl' />
                            <span>Dashboard</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/pim/view"
                        className={({ isActive }) =>
                            `block py-1 rounded-tr-2xl rounded-br-2xl mt-1 hover:bg-orange-400 hover:text-white ${isActive ? 'bg-orange-400 text-white' : ''
                            }`
                        }>
                        <div className='flex gap-2 items-center'>
                            <FaUserGroup className='shrink-0 pl-3 text-3xl' />
                            <span>PIM</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block py-1 rounded-tr-2xl rounded-br-2xl mt-1 hover:bg-orange-400 hover:text-white ${isActive ? 'bg-orange-400 text-white' : ''
                            }`
                        }>
                        <div to="" className='flex gap-2 items-center'>
                            <MdSettingsApplications className='shrink-0 pl-3 text-3xl' />
                            <span>Leave</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block py-1 rounded-tr-2xl rounded-br-2xl mt-1 hover:bg-orange-400 hover:text-white ${isActive ? 'bg-orange-400 text-white' : ''
                            }`
                        }>
                        <div to="" className='flex gap-2 items-center'>
                            <FaClock className='shrink-0 pl-3 text-3xl' />
                            <span>Time</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block py-1 rounded-tr-2xl rounded-br-2xl mt-1 hover:bg-orange-400 hover:text-white ${isActive ? 'bg-orange-400 text-white' : ''
                            }`
                        }>
                        <div to="" className='flex gap-2 items-center'>
                            <FaUserCog className='shrink-0 pl-3 text-3xl' />
                            <span>My Info</span>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block py-1 rounded-tr-2xl rounded-br-2xl mt-1 hover:bg-orange-400 hover:text-white ${isActive ? 'bg-orange-400 text-white' : ''
                            }`
                        }>
                        <div to="" className='flex gap-2 items-center'>
                            <IoSettings className='shrink-0 pl-3 text-3xl' />
                            <span>Settings</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar