import React from 'react'
import Image from 'next/image'
import mail from '../src/assets/mail-fill 1.svg'
import dmail from '../src/assets/dmail.svg'
import up from '../src/assets/up.svg'
import dup from '../src/assets/dup.svg'
import git from '../src/assets/github-fill 2.svg'
import dgit from '../src/assets/dgit.svg'
import linked from '../src/assets/linked.svg'
import dlinked from '../src/assets/dlinkedin.svg'
import Link from 'next/link'
interface contactProp {
    isDarkMode: boolean;
}

const ContactComponent: React.FC<contactProp> = ({ isDarkMode }) => {
    return (
        <div>
            <div id='contact' className="contact-wrapper pt-[115px] pb-[50px] ml-[180px] mr-[180px] flex justify-between">
                <h2>
                    CONTACT
                </h2>
                <section className="contact-btns flex gap-[12px]">
                    <button className='w-[180px] h-[40px] flex gap-[9px] items-center justify-center' style={{ border: '1px solid #C4C4C4', borderRadius: '5px' }} >
                        <Image alt='' src={isDarkMode ? dmail : mail} />
                        <Link href='mailto:unwanamichael2642@gmail.com?subject=Hey!&body=Message'legacyBehavior >
                            <a target="_blank" rel="noopener noreferrer">
                                Send an email
                            </a>
                        </Link>
                    </button>
                    <button className='w-[180px] h-[40px] flex gap-[9px] items-center justify-center' style={{ border: '1px solid #C4C4C4', borderRadius: '5px' }} >
                        <Image alt='' src={isDarkMode ? dlinked : linked} />
                        <Link href="https://www.linkedin.com/in/unwana-michael-30644025b/?originalSubdomain=ng" legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </Link>
                    </button>
                    <button className='w-[180px] h-[40px] flex gap-[9px] items-center justify-center' style={{ border: '1px solid #C4C4C4', borderRadius: '5px' }} >
                        <Image alt='' src={isDarkMode ? dup : up} />
                        <Link href="https://www.upwork.com/freelancers/~01d20ef9c3fb2cb1ab" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            Upwork
                        </a>
                        </Link>
                    </button>
                    <button className='w-[180px] h-[40px] flex gap-[9px] items-center justify-center' style={{ border: '1px solid #C4C4C4', borderRadius: '5px' }} >
                        <Image alt='' src={isDarkMode ? dgit : git} />
                        <a href="https://github.com/godszn">
                            Github
                        </a>
                    </button>
                </section>
            </div>
        </div>
    )
}

export default ContactComponent
