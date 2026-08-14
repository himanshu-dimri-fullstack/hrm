import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const PimView = () => {
    const data = [
        {
            id: 1,
            name: "Himanshu",
            title: "Full Stack Developer",
            status: "Full Time"

        },
        {
            id: 2,
            name: "Himanshu",
            title: "Full Stack Developer",
            status: "Full Time"

        },
        {
            id: 3,
            name: "Himanshu",
            title: "Full Stack Developer",
            status: "Full Time"

        },
        {
            id: 4,
            name: "Himanshu",
            title: "Full Stack Developer",
            status: "Full Time"

        },
        {
            id: 5,
            name: "Himanshu",
            title: "Full Stack Developer",
            status: "Full Time"

        },
        {
            id: 6,
            name: "Himanshu",
            title: "Full Stack Developer",
            status: "Full Time"

        },
        {
            id: 7,
            name: "Himanshu",
            title: "Full Stack Developer",
            status: "Full Time"

        }
    ]
    return (
        <div>
            <div className='bg-white rounded md:p-3 lg:p-6 mt-5'>
                <h3 className='text-lg font-semibold mb-5'>Employee Information</h3>
                <div className='grid grid-cols-4 gap-3'>
                    <div>
                        <label className='text-sm'>Employee Name</label><br />
                        <input className='focus:border-orange-400 focus:ring-2 focus:ring-orange-400 w-full rounded border border-[#bbb] p-2 outline-none px-3 mt-2' />
                    </div>
                    <div>
                        <label className='text-sm'>Employee Id</label><br />
                        <input className='focus:border-orange-400 focus:ring-2 focus:ring-orange-400 w-full rounded border border-[#bbb] p-2 outline-none px-3 mt-2' />
                    </div>
                    <div>
                        <label className='text-sm'>Employment Status</label><br />
                        <select className='w-full rounded border border-[#bbb] p-2 outline-none mt-2'>
                            <option>Select</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-sm'>Job Title</label><br />
                        <select className='w-full rounded border border-[#bbb] p-2 outline-none mt-2'>
                            <option>Select</option>
                            <option>Full Stack Developer</option>
                            <option>Front-End Developer</option>
                            <option>Back-End Developer</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-end gap-3 mt-5'>
                    <button className='px-5 p-1 bg-black/10 backdrop-blur text-black rounded-xl'>Reset</button>
                    <button className='px-5 p-1 bg-orange-400 text-white rounded-xl'>Search</button>
                </div>
            </div>
            <div className='bg-white rounded md:p-3 lg:p-6 mt-5'>
                <table className='w-full border-collapse'>
                    <tr className='border border-[#eee]'>
                        <th className='border border-[#bbb] p-2'>Id</th>
                        <th className='border border-[#bbb] p-2' >Name</th>
                        <th className='border border-[#bbb] p-2'>Job title</th>
                        <th className='border border-[#bbb] p-2'>Employment Status</th>
                        <th className='border border-[#bbb] p-2'>Actions</th>
                    </tr>
                    {
                        data.map((item) => {
                            return (
                                <tr key={item.id} className='border border-[#eee] text-center'>
                                    <td className='border border-[#bbb] p-2'>{item.id}</td>
                                    <td className='border border-[#bbb] p-2'>{item.name}</td>
                                    <td className='border border-[#bbb] p-2'>{item.title}</td>
                                    <td className='border border-[#bbb] p-2'>{item.status}</td>
                                    <td className='border border-[#bbb] p-2'>
                                        <div className='flex justify-center gap-1'>
                                            <button className='text-white bg-green-400 rounded-[50%] p-2'><MdEdit /></button>
                                            <button className='text-white bg-red-400 rounded-[50%] p-2'><MdDelete /></button>
                                        </div>

                                    </td>
                                </tr >
                            )
                        })
                    }
                </table>
            </div>
        </div >
    )
}

export default PimView