import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';



const Dashboard = () => {
    return (
        <div className='bg-[#eee] h-screen relative'>
            <Navbar />
            <div className='absolute top-0 left-0'>
                <Sidebar />
            </div>
            <div className='bg-black/30 backdrop-blur-xl w-50 flex absolute top-16.25 right-5'>
                <ul className='py-3 pl-3'>
                    <li className='mb-1 hover:bg-orange-700/30 hover:backdrop-blur px-3 hover:text-white'><Link to="/">About</Link></li>
                    <li className='mb-1 hover:bg-orange-700/30 hover:backdrop-blur px-3 hover:text-white'><Link to="/">Support</Link></li>
                    <li className='mb-1 hover:bg-orange-700/30 hover:backdrop-blur px-3 hover:text-white'><Link to="/">Change Password</Link></li>
                    <li className='mb-1 hover:bg-orange-700/30 hover:backdrop-blur px-3 hover:text-white'><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard