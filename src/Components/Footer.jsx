import React from 'react'
import logo from '../assets/Logo.webp'

export default function Footer() {
    return (
        <div className='flex'>
            <div className="w-full">
                <img src={logo} alt={logo} />
            </div>
            <div className="w-full"></div>
            <div className="w-full"></div>
        </div>
    )
}
