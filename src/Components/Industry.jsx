import React from 'react'
import Data from './DataProvider'

export default function Industry() {

    const extractedData = Object.entries(Data.Industry)
    // console.log(extractedData)

    return (
        <div className='mx-auto'>
            <div className="">
                <h1 className='font-semibold text-5xl text-center'>We Cater To Every <span className='text-amber-500'>Industries</span></h1>
                <h1 className='max-w-[600px] mx-auto text-center my-14'>We offer a range of services that cater to various industries
                    providing thorough support to businesses across the spectrum</h1>
            </div>
            <div className="flex flex-wrap gap-5 px-6 mx-auto w-full">
                <div className="flex flex-wrap gap-5 justify-evenly mx-auto">
                    <div className='flex gap-32 flex-wrap '>
                        {
                            extractedData.map(([key, value]) => (<div>
                                <div className="flex flex-col items-center gap-5 cursor-pointer">
                                    <img className='w-[50px] h-[50px]' src={value.image} alt={value.image} />
                                    <h2 className='text-center'>{value.title}</h2>
                                </div>
                            </div>))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
