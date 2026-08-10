import React from 'react'

const PimView = () => {
    return (
        <div>
            <div className='bg-white rounded p-6 mt-5'>
                <h3 className='text-lg font-semibold mb-5'>Employee Information</h3>
                <div className='grid grid-cols-4 gap-3'>
                    <div>
                        <label className='text-sm'>Employee Name</label><br />
                        <input className='w-full rounded border border-[#bbb] py-2 outline-none px-3 mt-2' />
                    </div>
                    <div>
                        <label className='text-sm'>Employee Id</label><br />
                        <input className='w-full rounded border border-[#bbb] py-2 outline-none px-3 mt-2' />
                    </div>
                    <div>
                        <label className='text-sm'>Employment Status</label><br />
                        <select className='w-full rounded border border-[#bbb] py-2 outline-none mt-2'>
                            <option>Select</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-sm'>Job Title</label><br />
                        <select className='w-full rounded border border-[#bbb] py-2 outline-none mt-2'>
                            <option>Select</option>
                            <option>Full Stack Developer</option>
                            <option>Front-End Developer</option>
                            <option>Back-End Developer</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-end gap-3 mt-5'>
                    <button className='px-5 py-1 bg-black/10 backdrop-blur text-black rounded-xl'>Reset</button>
                    <button className='px-5 py-1 bg-orange-400 text-white rounded-xl'>Search</button>
                </div>
            </div>
            <div className='bg-white rounded p-6 mt-5'>
                <table className='w-full border-collapse'>
                    <tr className='border border-[#eee]'>
                        <th className='border border-[#eee]'>Id</th>
                        <th className='border border-[#eee]' >Name</th>
                        <th className='border border-[#eee]'>Job title</th>
                        <th className='border border-[#eee]'>Employment Status</th>
                        <th className='border border-[#eee]'>Actions</th>
                    </tr>
                    <tr className='border border-[#eee]'>
                        <td className='border border-[#eee]'>112233</td>
                        <td className='border border-[#eee]'>Himanshu</td>
                        <td className='border border-[#eee]'>Full Stack Developer</td>
                        <td className='border border-[#eee]'>Full Time</td>
                        <td className='border border-[#eee]'></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default PimView