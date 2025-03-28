import React from 'react'
import AboutImg from "../assets/AboutImg.webp"

export default function About() {
    return (
        <div className='mx-auto p-6 mt-20'>
            <div className="flex">
                <div className="w-full">
                    <img className='w-full object-cover' src={AboutImg} alt={AboutImg} />
                </div>
                <div className="w-full">
                    <div className=" flex flex-col w-[80%] m-auto">
                        <h1 className='text-5xl font-semibold leading-[60px]'>About Us</h1>
                        <h2 className='text-4xl font-semibold leading-[42px] mt-3'>Crafting Quality Solutions That Matter</h2>
                        <p className='leading-7 text-justify mt-4'>Uptech WebSolutions is a proficient IT software development company headquartered in Surat, India, comprising seasoned outsourcing specialists with over a decade of expertise. Renowned for our offshore web and mobile development solutions, we pride ourselves on delivering competitive services characterized by efficiency and prompt project execution. Our extensive array of offerings prioritizes client confidentiality, ensuring the protection of their interests at all times.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
