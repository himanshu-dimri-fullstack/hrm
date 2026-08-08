import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='min-h-screen bg-orange-400 backdrop-blur'>
            <div className='min-h-screen w-[60%]  bg-blue-50 flex justify-center items-center'>
                <form className='w-[60%] h-[80%] bg-white/50 flex justify-center py-5 rounded-lg shadow-md backdrop-blur-2xl'>
                    <div className='w-[70%]'>
                        <div className='mb-3'>
                            <label className='text-sm font-semibold'>Email</label><br />
                            <input className='border border-orange-400 rounded outline-none w-full mt-1 px-2 py-1
                            focus:ring-1 focus:ring-orange-400' />
                        </div>
                        <div className='mb-3'>
                            <label className='text-sm font-semibold'>Password</label><br />
                            <input className='border border-orange-400 rounded outline-none w-full mt-1 px-2 py-1
                            focus:ring-1 focus:ring-orange-500' />
                        </div>
                        <div className='mb-3 mt-5'>
                            <Link to="/dashboard" className='block border border-orange-400 bg-orange-400 text-white px-5 py-1
                            rounded text-center'>Login</Link>
                        </div>
                        <div className='mb-3 text-center'>
                            <Link to="/dashboard" className='text-sm text-orange-400 '>Forget Password?</Link>
                        </div>
                    </div>
                </form>

            </div >
        </div >
    )
}

export default Login