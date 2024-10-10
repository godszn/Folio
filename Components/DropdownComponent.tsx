import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import close from '../src/assets/close.svg'
interface dropdownProp {
    menuClick: () => void;
    isDropdown: boolean;
}

const DropdownComponent: React.FC<dropdownProp> = ({ menuClick, isDropdown }) => {
    return (
        <div>
            <div className="dropdown-wrapper top-0 absolute right-0 bg-red">
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgb(12 13 14 / 85%)',
                        display: isDropdown ? 'flex' : 'none',
                        flexDirection: 'column',
                        color: 'white',
                        fontSize: '25px',
                        gap: '25px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        transition: 'all 0.3s ease',
                    }}>
                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            textAlign: 'center',
                        }}
                    >
                        <div className='flex end absolute top-[8%] right-[6%] w-[20px]'>
                            <Image src={close} onClick={menuClick} alt='' />
                        </div>
                        <li onClick={menuClick} style={{ margin: '20px 0' }}>
                            <Link href="#projects">Projects</Link>
                        </li>
                        <Link href="https://drive.google.com/file/d/1jK_8usmw3RdsZftQqdXqNthSyA3hPwN4/view" legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                                    Resume
                                </a>
                        </Link>
                        <li onClick={menuClick} style={{ margin: '20px 0' }}>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DropdownComponent
