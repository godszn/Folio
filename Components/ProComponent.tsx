import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import git from '../src/assets/Group.svg'
import dgit from '../src/assets/dgitt.svg'
import link from '../src/assets/link-m 1.svg'
import dlink from '../src/assets/dlink.svg'
import pro1 from '../src/assets/getlinked.jpg'
import pro2 from '../src/assets/hangout.jpg'
import pro3 from '../src/assets/adimot.jpg'
import pro4 from '../src/assets/bitstamp.jpg'
interface proProp {
    isDarkMode: boolean;
}

const ProComponent: React.FC<proProp> = ({ isDarkMode }) => {
    return (
        <div>
            <div id='projects' className="pro-wrapper mt-[100px] ml-[180px] pb-[160px] mr-[180px]" style={{ borderBottom: '1px solid #C6C6C6' }}>
                <main className="pro-grid">
                    <h3 className=''>
                        FEATURED PROJECTS
                    </h3>
                    <div className="pro-container-gen grid mt-[50px] grid-cols-2 gap-[57px]">
                        <section className="pro-container">
                            <div className="pro-widget cursor-pointer">
                                <Link href="https://astrobox-godszn.vercel.app" legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <Image src={pro1} className='rounded-[.5rem]' style={{ boxShadow: '1px 1px 8px #9932cc91' }} alt='' />
                                    </a>
                                </Link>
                            </div>
                            <div className="pro-text flex flex-col gap-[10px]">
                                <section className='flex justify-between mt-[30px]'>
                                    <h2 className=' text-[22px]'>
                                        GetLinked Landing page
                                    </h2>
                                    <span className='flex gap-[20px]'>
                                        <Link href="https://github.com/godszn/Astrobox" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Image alt='' className='cursor-pointer' src={isDarkMode ? dgit : git} />
                                            </a>
                                        </Link>
                                        <Link href="https://astrobox-godszn.vercel.app" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Image alt='' className='cursor-pointer' src={isDarkMode ? dlink : link} />
                                            </a>
                                        </Link>
                                    </span>
                                </section>
                                <p className='text-[14px]'>
                                    A responsive website built with TypeScript and React , styled using Tailwind CSS.
                                    The project showcases clean design, optimized layouts, and fast performance across devices.
                                </p>
                                <h5 className='text-[14px] ' style={{ color: isDarkMode ? '#030203' : '' }}>
                                    CSS - TypeScript - React - Tailwind
                                </h5>
                            </div>
                        </section>

                        <section className="pro-container">
                            <div className="pro-widget cursor-pointer">
                                <Link href="https://hangout-dao-clone.vercel.app" legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <Image src={pro2} className='rounded-[.5rem]' style={{ boxShadow: '1px 1px 8px #008b8b99' }} alt='' />
                                    </a>
                                </Link>
                            </div>
                            <div className="pro-text flex flex-col gap-[10px]">
                                <section className='flex justify-between mt-[30px]'>
                                    <h2 className='text-[22px]'>
                                        HangoutDao Website Clone
                                    </h2>
                                    <span className='flex gap-[20px]'>
                                        <Link href="https://github.com/godszn/HangoutDAO-Clone" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Image alt='' className='cursor-pointer' src={isDarkMode ? dgit : git} />
                                            </a>
                                        </Link>
                                        <Link href="https://hangout-dao-clone.vercel.app" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Image alt='' className='cursor-pointer' src={isDarkMode ? dlink : link} />
                                            </a>
                                        </Link>
                                    </span>
                                </section>
                                <p className='text-[14px]' style={{ color: isDarkMode ? '#030203 !important' : '' }}>
                                    A responsive clone of the HangoutDAO website built with JavaScript, HTML, and CSS. Bootstrap was used for layout and styling, ensuring mobile responsiveness.
                                </p>
                                <h5 className='text-[14px] ' style={{ color: isDarkMode ? '#030203' : '' }}>
                                    JavaScript - CSS - HTML - Bootstrap
                                </h5>
                            </div>
                        </section>

                        <section className="pro-container">
                            <div className="pro-widget cursor-pointer">
                                <Link href="https://adimot.com.ng" legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <Image src={pro3} className='rounded-[.5rem]' style={{ boxShadow: isDarkMode ? '1px 1px 6px rgb(41 46 46 / 63%)' : '1px 1px 6px #f0ffffa1' }} alt='' />
                                    </a>
                                </Link>
                            </div>
                            <div className="pro-text flex flex-col gap-[10px]">
                                <section className='flex justify-between mt-[30px]'>
                                    <h2 className=' text-[22px]'>
                                        Adimot Website
                                    </h2>
                                    <span className='flex gap-[20px]'>
                                        <Link href="https://github.com/godszn/AdiMot" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Image alt='' className='cursor-pointer' src={isDarkMode ? dgit : git} />
                                            </a>
                                        </Link>
                                        <Link href="https://adimot.com.ng" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Image alt='' className='cursor-pointer' src={isDarkMode ? dlink : link} />
                                            </a>
                                        </Link>
                                    </span>
                                </section>
                                <p className='text-[14px] '>
                                    A responsive and dynamic website built with Next.js and TypeScript, styled using Tailwind CSS. This project showcases efficient navigation and smooth performance across all devices.
                                </p>
                                <h5 className='text-[14px] ' style={{ color: isDarkMode ? '#030203' : '' }}>
                                    CSS - TypeScript - Next.js - Tailwind
                                </h5>
                            </div>
                        </section>

                        <section className="pro-container">
                                <div className="pro-widget cursor-pointer">
                                <Link href="https://bitstamp-clone-gvyg.vercel.app/" legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <Image src={pro4} className='rounded-[.5rem]' style={{ boxShadow: '1px 1px 8px #3cb371bd' }} alt='' />
                                    </a>
                                    </Link>
                                </div>
                            <div className="pro-text flex flex-col gap-[10px]">
                                <section className='flex justify-between mt-[30px]'>
                                    <h2 className='text-[22px]'>
                                        Bitstamp Clone Website
                                    </h2>
                                    <span className='flex gap-[20px]'>
                                        <Link href="https://github.com/godszn/Bitstamp-clone" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Image alt='' className='cursor-pointer' src={isDarkMode ? dgit : git} />
                                            </a>
                                        </Link>
                                        <Link href="https://bitstamp-clone-gvyg.vercel.app/" legacyBehavior>
                                            <a target="_blank" rel="noopener noreferrer">
                                                <Image alt='' className='cursor-pointer' src={isDarkMode ? dlink : link} />
                                            </a>
                                        </Link>
                                    </span>
                                </section>
                                <p className='text-[14px] '>
                                    A clone of the Bitstamp trading platform built from scratch using Next.js and TypeScript. Tailwind CSS was utilized for a modern and responsive design. The project demonstrates the layout and user interface without full functionality.
                                </p>
                                <h5 className='text-[14px] ' style={{ color: isDarkMode ? '#030203' : '' }}>
                                    CSS - TypeScript - Next.js - Tailwind
                                </h5>
                            </div>
                        </section>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default ProComponent
