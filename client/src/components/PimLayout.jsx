import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const PimLayout = () => {
    return (
        <div>
            <nav className='h-[10vh] bg-white flex items-center px-5'>
                <div className='flex gap-4'>
                    <div className=''>
                        <NavLink to="/pim/view" className={({ isActive }) => `px-4 py-2 rounded-xl text-sm ${isActive ? "bg-orange-400/20 backdrop-blur text-orange-400" : ""}`}>Employee List</NavLink>
                    </div>
                    <div>
                        <NavLink to="/pim/add" className={({ isActive }) => `px-4 py-2 rounded-xl text-sm ${isActive ? "bg-orange-400/20 backdrop-blur text-orange-400" : ""}`} >Add Employee</NavLink>
                    </div>
                    <div>
                        <NavLink to="/pim/edit" className={({ isActive }) => `px-4 py-2 rounded-xl text-sm ${isActive ? "bg-orange-400/20 backdrop-blur text-orange-400" : ""}`}>Edit Employee</NavLink>
                    </div>
                </div>
            </nav>
            <div className='h-[80vh] overflow-scroll'>
                <Outlet />
            </div>
        </div>

    )
}

export default PimLayout