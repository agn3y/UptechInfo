import React, { useState } from 'react'
import Data from "./DataProvider"

export default function NewServices() {
    const ServiceMenu = Object.keys(Data.services)
    const [key, setKey] = useState(ServiceMenu[0])
    return (
        <div className='px-5 '>
            <div className='text-center'>
                <h1 className='font-semibold text-5xl underline underline-offset-8 decoration-amber-500 decoration-2'>
                    Our Services
                </h1>
                <h1 className='font-semibold text-3xl mt-7'>
                    Delivering Exceptional <span className='text-amber-500'>Services</span> For You
                </h1>
            </div>

            <div className='flex overflow-auto'>
                <div className="mt-10 flex">
                    <div className="w-full flex flex-col gap-4 mt-12 items-center">
                        {ServiceMenu.map((opt) => (
                            <div key={opt} className='flex justify-between w-full sm:w-[350px] max-w-[350px] px-6 py-2 border-2 border-amber-500 rounded-md' onClick={() => setKey(opt)}>
                                <button>{opt}</button>
                                <img src={Data.image[0]} className='h-[40px] w-[40px] object-cover' />
                            </div>
                        ))}
                    </div>

                    <div className="w-full shadow-md p-10">
                        <h1 className='text-3xl font-semibold'>{Data.services[key].title}</h1>
                        <p className='leading-7 text-justify'>{Data.services[key].content}</p>
                        <div className='flex gap-3 w-full'>
                            <div>
                                {
                                    Data.services[key]?.subtitle1 && Data.services[key].subtitle1.map((data, index) => (<div className='flex gap-2 items-center' key={index}>
                                        <img src={Data.image[0]} alt={Data.image[0]} className='w-[35px] h-[35px] object-cover' />
                                        <p>{data}</p>
                                    </div>))
                                }
                            </div>
                            <div>
                                {
                                    Data.services[key]?.subtitle2 && Data.services[key].subtitle2.map((data, index) => (<div className='flex gap-2 items-center' key={index}>
                                        <img src={Data.image[0]} alt={Data.image[0]} className='w-[35px] h-[35px] object-cover' />
                                        <p>{data}</p>
                                    </div>))
                                }
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className='py-2 px-4 bg-amber-500 text-white rounded-md cursor-pointer'>Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
