import React from 'react'
import App from "../assets/AppDevelopment.png"
import Website from "../assets/WebsiteDevelopment.png"
import UiUx from "../assets/Design.png"
import Support from "../assets/Support.png"
import Qa from "../assets/Qa.png"
import rightArrow from "../assets/RightArrow.png"

export default function Service() {
    return (
        <div className='flex flex-col items-center mt-6'>
            <h1 className='text-5xl font-semibold'>Our Services</h1>
            <h2 className='text-4xl font-semibold mt-3'>
                Delivering Exceptional <span className='text-amber-500'>Services</span> For You
            </h2>

            <div className='flex mt-6 w-full p-4 h-[500px]'>
                <div className='w-[40%] flex flex-col justify-between'>
                    <div className="w-full flex items-center justify-between gap-2 border-2 border-amber-500 p-3 rounded-md">
                        <img className='h-[43px] w-43px object' src={App} alt={App} />
                        <p>Mobile Development</p>
                        <img className='h-[15px] w-[13px] object' src={rightArrow} alt={rightArrow} />
                    </div>
                    <div className="w-full flex items-center justify-between gap-2 border-2 border-amber-500 p-3 rounded-md">
                        <img className='h-[43px] w-43px object' src={Website} alt={Website} />
                        <p>Website Development</p>
                        <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                    </div>
                    <div className="w-full flex items-center justify-between gap-2 border-2 border-amber-500 p-3 rounded-md">
                        <img className='h-[43px] w-43px object' src={UiUx} alt={UiUx} />
                        <p>UI / UX Design</p>
                        <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                    </div>
                    <div className="w-full flex items-center justify-between gap-2 border-2 border-amber-500 p-3 rounded-md">
                        <img className='h-[43px] w-43px object' src={Support} alt={Support} />
                        <p>Support & Maintenanace</p>
                        <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                    </div>
                    <div className="w-full flex items-center justify-between gap-2 border-2 border-amber-500 p-3 rounded-md">
                        <img className='h-[43px] w-43px object' src={Qa} alt={Qa} />
                        <p>QA & Testing</p>
                        <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                    </div>
                </div>
                <div className='w-full ml-10'>
                    <div id="AppDev" >
                        <h1 className='text-3xl font-semibold'>Mobile Application Development</h1>
                        <p className='text-justify mt-5'>The surge in the demand for mobile apps across various industries is evident. To address this, we serve as your catalyst in crafting and creating brilliant mobile applications.Uptech Solution stands out as a leading mobile app development firm in Surat, India, providing top-tier services for iPhone, iPad, and Android application development.</p>
                        <div className='flex flex-col w-full'>
                            <div className='flex gap-10 mt-5'>
                                <div className="flex items-center gap-2.5">
                                    <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                                    <p> IOS Development</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                                    <p>Fultter Development</p>
                                </div>
                            </div>
                            <div className='flex gap-10 mt-5'>
                                <div className="flex items-center gap-2.5">
                                    <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                                    <p>Android Development</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                                    <p> React-Native Development</p>
                                </div>
                            </div>
                        </div>
                        <button className='bg-[#242424] text-white px-4 py-2 rounded-md mt-5 cursor-pointer'>Know More</button>
                    </div>
                </div>
                <div className='w-full ml-10'>
                    <div id="WebDev" >
                        <h1 className='text-3xl font-semibold'>Website Development</h1>
                        <p className='text-justify mt-5'>Embarking on the journey of website development is a path that only a few can navigate successfully. Crafting a website is a creatively brilliant process, and its design enhances its beauty. At SIPL, we go beyond merely conveying a message through website development. We opt to delve into the essence of your brand, unraveling its intricacies and transforming it into a household name</p>
                        <div className='flex flex-col w-full'>
                            <div className='flex gap-10 mt-5'>
                                <div className="flex items-center gap-2.5">
                                    <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                                    <p> PHP Development</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                                    <p>WordPress Development</p>
                                </div>
                            </div>
                            <div className='flex gap-10 mt-5'>
                                <div className="flex items-center gap-2.5">
                                    <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                                    <p>Cake PHP Development</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <img className='h-[15px] w-[15px] object' src={rightArrow} alt={rightArrow} />
                                    <p> Laravel Development</p>
                                </div>
                            </div>
                        </div>
                        <button className='bg-[#242424] text-white px-4 py-2 rounded-md mt-5 cursor-pointer'>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
