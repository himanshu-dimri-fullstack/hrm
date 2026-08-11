import React from 'react'

const Form = () => {
    return (
        <form>
            <div className='grid grid-cols-4 gap-2'>

                <div>
                    <label>Name</label><br />
                    <input type="text" className='w-full rounded border border-[#bbb] py-2 outline-none mt-2 px-2' />
                </div>

                <div>
                    <label>Age</label><br />
                    <input type="number" className='w-full rounded border border-[#bbb] py-2 outline-none mt-2 px-2' />
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

                <div className='col-span-2'>
                    <label>Address</label><br />
                    <input type="text" className='w-full rounded border border-[#bbb] py-2 outline-none mt-2 px-2' />
                </div>

                <div>
                    <label>State</label><br />
                    <input type="text" className='w-full rounded border border-[#bbb] py-2 outline-none mt-2 px-2' />
                </div>

                <div>
                    <label>City</label><br />
                    <input type="text" className='w-full rounded border border-[#bbb] py-2 outline-none mt-2 px-2' />
                </div>

                <div className='col-span-2'>
                    <label>Bio</label><br />
                    <textarea type="number" className='w-full h-40 rounded border border-[#bbb] py-2 outline-none mt-2 px-2'>
                    </textarea>
                </div>

            </div>

            <div className='mt-5'>
                <button className='text-white bg-orange-400 px-10 py-1 rounded'>Submit</button>
            </div>

        </form>
    )
}

export default Form