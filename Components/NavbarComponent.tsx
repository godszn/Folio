'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import sun from '../src/assets/sun-fill 1.svg'
import dmenu from '../src/assets/dmenu.png'
import menu from '../src/assets/menu.png'
import moon from '../src/assets/night.svg'
import Link from 'next/link'

interface ToggleProp {
    toggleDarkmode: () => void;
    isDarkMode: boolean;
    menuClick: () => void;
  }
  
  const NavbarComponent: React.FC<ToggleProp> = ({ toggleDarkmode, isDarkMode , menuClick }) => {

    return (
        <div>
            <div className="navbar-wrapper">
                <div className="navbar-container pt-[46px] pb-[46px] pl-[180px] pr-[180px] flex justify-between">
                    <section className="logo text-[22px]">
                        <h4>
                            UM.
                        </h4>
                    </section>
                    <section className="navlink-wrapper items-center flex gap-[30px]">
                        <div className="navlinks flex">
                            <ul className='flex  gap-[30px]'>
                                <Link href="#projects">
                                    <li className='cursor-pointer'>
                                        Projects
                                    </li>
                                </Link>
                                <Link href="https://drive.google.com/file/d/1jK_8usmw3RdsZftQqdXqNthSyA3hPwN4/view" legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                                    Resume
                                </a>
                                </Link>
                                <Link href="#contact">
                                    <li className='cursor-pointer'>
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="dropdown cursor-pointer" onClick={menuClick}>
                            <Image alt = '' src = {isDarkMode ? dmenu : menu}/>
                        </div>
                        <div className="navwidget cursor-pointer" >
                            <Image onClick={toggleDarkmode} src={isDarkMode ? moon : sun} alt='' />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent
