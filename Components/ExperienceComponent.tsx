'use client'
import React, { useState } from 'react'

const ExperienceComponent = () => {
    const [isActive, setActive] = useState<'slotA' | 'slotB'>('slotA');

    const toggleBtn = (button: 'slotA' | 'slotB') => {
        setActive(button);
    }
    return (
        <div>
            <div className="experience-wrapper ml-[180px] mr-[180px] pt-[105px] pb-[100px]" style={{ borderBottom: '1px solid #C6C6C6' }}>
                <section className="company-slide">
                    <h3 className=''>
                        EXPERIENCE
                    </h3>
                    <div className="slot-wrapper w-[100%] flex pb-[30px] mt-[20px] gap-[20px]">
                        <button
                            onClick={() => toggleBtn('slotA')}
                            className={`w-[160px] h-[40px] ${isActive === 'slotA' ? 'slot1' : ''}`}>
                            HNG
                        </button>
                        <button
                            onClick={() => toggleBtn('slotB')}
                            className={`w-[160px] h-[40px] ${isActive === 'slotB' ? 'slot2' : ''}`}>
                            INTPLUS
                        </button>
                    </div>
                    <section className="company-work w-[100%]">
                        <main className='flex justify-between items-center mt-[30px]'>
                            <h1 className='text-[22px]'>
                                {isActive === 'slotA' ? 'Frontend Developer at HNG (Remote)' : 'Frontend Developer at Intplus Technologies (Remote)'}
                            </h1>
                            <h5 className='text-[14px]'>
                                {isActive === 'slotA' ? 'Sep 2023 - Dec 2023 (4 months)' : 'Jan 2024 - May 2024 (5 months)'}
                            </h5>
                        </main>

                        <section className='work-details mt-[20px]'>

                            <ul className='gap-[10px] flex flex-col mt-[10px]'>
                                <li className='text text-[14px]'>
                                    {isActive === 'slotA' ? '- Applied JavaScript to create interactive elements, enhancing user engagement.' : '- Implemented responsive designs using HTML, CSS, and frameworks like Bootstrap and TailwindCSS.'}
                                </li>
                                <li className='text text-[14px]'>
                                    {isActive === 'slotA' ? '- Contributed to the development of client-side features and functionalities.' : '- Collaborating with teams at INTPLUS.'}
                                </li>
                                <li className='text text-[14px]'>
                                    {isActive === 'slotA' ? '- Implementing design systems and UI components.' : '- Developed dynamic and interactive user interfaces with Next.js.'}
                                </li>
                                <li className='text-[14px]'>
                                    {isActive === 'slotA' ? '- Collaborated with cross-functional teams to deliver high-quality, scalable web applications.' : '- Utilized TypeScript to enhance code quality and maintainability.'}
                                </li>
                            </ul>
                        </section>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default ExperienceComponent
