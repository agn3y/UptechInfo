import React from 'react'

export default function Value() {
    return (
        <div className='max-w-[1450px] mx-auto my-20'>
            <div className="flex gap-10 h-[300px] max-h-[300px]">
                <div className="w-full bg-amber-100 flex flex-col items-center justify-center overflow-hidden rounded-2xl hover:shadow-2xl hover:shadow-gray-400">
                    <h1>9 +</h1>
                    <p>Years in <br />Business</p>
                </div>
                <div className="w-full bg-amber-100 flex flex-col items-center justify-center overflow-hidden rounded-2xl hover:shadow-2xl hover:shadow-gray-400"><h1>190 +</h1><p>Solution <br />Delivered</p></div>
                <div className="w-full bg-amber-100 flex flex-col items-center justify-center overflow-hidden rounded-2xl hover:shadow-2xl hover:shadow-gray-400"><h1>15 +</h1><p>Tech <br /> Experts</p></div>
                <div className="w-full bg-amber-100 flex flex-col items-center justify-center overflow-hidden rounded-2xl hover:shadow-2xl hover:shadow-gray-400"><h1>150 +</h1><p>Reviews From <br /> Our Clients</p></div>
            </div>
        </div >
    )
}
