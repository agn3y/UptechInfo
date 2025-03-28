import { useEffect, useState } from 'react'
import logo from "../assets/Logo.webp"
import Data from "./DataProvider"

import React from 'react'

export default function Header() {
    return (
        <div className='p-6 sticky top-0 z-50 backdrop-blur-lg bg-white/30 border-b border-white/10'>
            <div className='flex justify-between items-center'>
                <img src={logo} alt={logo} className='max-h-12 w-auto object-cover cursor-pointer' />
                <ul className='flex gap-4 '>
                    {
                        Data.Navlist.map((data) => <li key={data} className='list-none hover:underline underline-offset-8 decoration-amber-500 decoration-2 cursor-pointer'>{data}</li>)
                    }
                </ul>
                <p className='py-2 px-7 border-2 border-amber-500 rounded-xl hover:text-white hover:bg-amber-500 cursor-pointer'>
                    Contact Us
                </p>
            </div>
        </div>
    )
}
