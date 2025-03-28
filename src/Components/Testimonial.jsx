import React, { useEffect, useState } from 'react'
import Data from "./DataProvider"

export default function Testimonial() {
    const [testimonial, setTestimonial] = useState(0)

    useEffect(() => {
        const Timer = setTimeout(() => {
            setTestimonial((prev) => ((prev + 1) % Data.display.length))
        }, 2000);
        return () => clearTimeout(Timer)
    }, [testimonial])

    return (
        <div className='flex mt-36 h-[250px] px-6'>
            <div className="w-full mr-32">
                <h1 className='text-5xl font-semibold leading-[57px] text-amber-500'>#Our Testimonial</h1>
                <h3 className='text-3xl font-semibold mt-4'>Our Clients Recommend Us</h3>
                <p className='mt-3 text-justify'>Our clients trust in our expertise. We consistently propel them ahead of competitors with high-quality IT solutions. Their unwavering faith in us is evident as they choose to collaborate with us repeatedly</p>
            </div>
            <div className="w-full p-6 shadow-xl flex flex-col justify-between">
                <p className='text-justify w-[400px]' >{Data.testimonials[testimonial].review}</p>
                <div>
                    <div className='flex items-center gap-4'>
                        <img className='w-[100px] h-[100px] overflow-hidden rounded-full shadow-2xl' src={Data.testimonials[testimonial].image} alt={Data.testimonials[testimonial].image} />
                        <h1 className='font-bold' >{Data.testimonials[testimonial].name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}