import React from 'react'
import logo from '../assets/Logo.webp'
import Data from './DataProvider'

export default function Footer() {
    const extractedData = Object.entries(Data.Footer.ContactUs)
    const extractedAbout = Object.entries(Data.Footer.About).map((data) => data)
    console.log(extractedAbout[0])
    return (
        <div className='flex w-full mt-28 p-9 shadow-2xl'>
            <div className="w-full flex flex-col gap-2">
                <div className="w-full">
                    <img src={logo} alt={logo} className='w-[45%] cursor-pointer' />
                </div>
                <ul className='flex gap-3 my-7'>
                    {
                        Data.Footer.Menu.map((data) => { return <li>{data}</li> })
                    }
                </ul>
                <p className='cursor-pointer'>Uptech Solution @ 2024</p>
            </div>
            <div className="w-full flex flex-col items-start justify-between">
                <h1 className=' decoration-2 hover:underline hover: underline-offset-8 hover:decoration-amber-500'>Reach Us</h1>
                {
                    extractedData.map(([key, value]) => (<div>
                        <p className=' decoration-2 hover:underline hover: underline-offset-8 hover:decoration-amber-500'>{value}</p>
                    </div>))
                }
            </div>
            <div className="w-full">
                <h1 className='font-semibold'>{extractedAbout[0][1]}</h1>
                <h1 className='mt-3 text-justify'>{extractedAbout[1][1]}</h1>
                <div className='flex mt-4.5'>
                    {
                        Data.Footer.About.images.map((image) => (<div className='w-full'>
                            <img className='w-[50px] h-[50px] p-0.5 border border-fuchsia-300 overflow-hidden rounded-md' src={image} alt={image} />
                        </div>))
                    }
                </div>
            </div>
        </div >
    )
}
