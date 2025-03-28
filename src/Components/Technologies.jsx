import React, { useState } from 'react'
import Data from "../Components/DataProvider"

export default function Technologies() {

    const AllTechnologies = Object.keys(Data.TechFilter)
    const [query, seyQuery] = useState("All")
    const Filter = AllTechnologies.filter((data) => query === "All" || query === Data.TechFilter[data].type)

    return (
        <div className='mt-10 px-6 my-18'>
            <div className="text-center">
                <h1 className='font-semibold text-5xl'>Technologies we work with</h1>
                <p className='mt-10'>Our proficient team of developers translates your concepts into exceptional apps and software
                    harnessing cutting-edge technologies</p>
            </div>
            <div>
                <ul className='flex gap-10 justify-center mt-10 flex-wrap'>
                    {
                        Data.filterCategory.map((data) => <li
                            key={data}
                            className='list-none shadow-xl px-3 py-2 cursor-pointer'
                            onClick={() => {
                                seyQuery(data)
                                console.log(data)
                            }}>
                            {data}
                        </li>)
                    }
                </ul>
                <div className='flex flex-wrap gap-6  max-w-[1200px] mx-auto mt-12 justify-between'>
                    {
                        Filter.map((DataProvider) =>
                        (<div className=' bg-amber-500 w-[100px] max-w-[100px] h-[100px] max-h-[100px] mx-auto flex flex-col items-center justify-center overflow-hidden rounded-2xl'>
                            <img src={Data.TechFilter[DataProvider].src[0]} />
                            <h1 key={DataProvider}>{DataProvider}</h1>
                        </div>))
                    }
                </div>
            </div>
        </div >
    )
}
