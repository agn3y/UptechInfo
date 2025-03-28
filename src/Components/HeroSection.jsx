import { useEffect, useState } from 'react'
import Data from "./DataProvider"
import HeroImage from "../assets/Hero.webp"

import React from 'react'

export default function HeroSection() {

    const [text, setText] = useState(0)

    useEffect(() => {
        const Timer = setTimeout(() => {
            setText((prev) => ((prev + 1) % Data.display.length))
        }, 1500);
        return () => clearTimeout(Timer)
    }, [text])

    return (
        <div className='flex items-center px-6 my-10'>
            <div className="w-full">
                <div className="max-w-[450px] flex flex-col gap-5 text-justify">
                    <span className='text-amber-500 font-semibold'>#Quality Matters</span>
                    <h1 className='text-5xl font-semibold leading-[57px]'>Craft Exceptional  <br /> {Data.display[text]} </h1>
                    <p className='leading-7'>Revolutionize your business with our state-of-the-art IT solutions. From consultation to execution, allow us to assist you in accomplishing your business goals!</p>
                    <span className='py-3 px-6 w-fit border-2 border-amber-500 rounded-xl hover:text-white hover:bg-amber-500 cursor-pointer'>Schedule A Meeting</span>
                </div>
            </div>
            <div className="w-full ">
                <img src={HeroImage} alt={HeroImage} />
            </div>
        </div>
    )
}