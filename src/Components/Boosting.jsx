import React from 'react'
import Data from './DataProvider'

export default function Boosting() {
    return (
        <div>
            <h1 className='text-5xl font-semibold text-center leading-[57px]'>Boosting Your Business Through <br />
                <span className='text-amber-500 '> Our Streamlined Process</span>
            </h1>
            <p className='leading-7 text-center mt-5 w-[1000px] mx-auto'>At the core of our approach lies a commitment to effective collaboration, detailed strategizing, and flawless execution. We strive to deliver outstanding results by ensuring a seamless and well-coordinated working process</p>
            <div>
                <div className='flex mt-8'>
                    {Data.Boosting.Image.map((img, index) => (<div>
                        <img src={img} alt={img} />
                        <p className='text-center'>{Data.Boosting.title[index]}</p>
                    </div>))}
                </div>
            </div>
        </div>
    )
}
