import React from 'react'
import Image from 'next/image'
import line from '../src/assets/Line 1.svg'
import dline from '../src/assets/dline.svg'
import Link from 'next/link'
interface modeprop {
    isDarkMode: boolean;
}

const MainComponent: React.FC<modeprop> = ({ isDarkMode }) => {
    return (
        <div>
            <div className="main-wrapper pl-[180px] pr-[180px] pt-[130px]">
                <div className="main-textwrapper">
                    <h4 className=' text-[16px]'>
                        Hey, I'm
                    </h4>
                    <h1 className='text-[70px] unwana'>
                        Unwana Michael
                    </h1>
                    <p className=' mt-[24px] text-[18px]'>
                        Experienced Frontend Developer with 2 years of expertise in HTML, CSS, JavaScript, TypeScript, Tailwind, React.js, and Next.js. I ensure high-quality results that always meet and exceed expectations. 😉
                    </p>
                    <Link href = '#contact'>
                        <span className='flex mt-[60px] gap-[10px] cursor-pointer' >
                            <p className=' text-[24px]'>
                                Say hi
                            </p>
                            <Image src={isDarkMode ? dline : line} alt='' />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainComponent
