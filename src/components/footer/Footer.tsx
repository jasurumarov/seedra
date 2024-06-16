import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import SiteLogo from '../../assets/icons/site-logo.svg'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { MdFacebook } from 'react-icons/md'

const Footer: React.FC = () => {
    return (
        <footer className='shadow-shadowFooter'>
            <div className="container">
                <article className='py-9 flex flex-wrap items-center flex-col xl:flex-row gap-9 border-b-[2px] border-[#C3E0C6] border-b-solid'>
                    <ul className='flex flex-wrap items-center gap-4 sm:gap-8'>
                        <li className='font-lexand500 text-[12px] sm:text-sm tracking-[-3.5%] text-colorGreen cursor-pointer duration-200 hover:scale-[1.03]'>ALL PRODUCTS</li>
                        <span className='text-[#4FA083] hidden sm:flex'>|</span>
                        <li className='font-lexand text-[12px] sm:text-sm tracking-[-3.5%] text-[#70737C] cursor-pointer duration-200 hover:scale-[1.03] hover:text-colorGreen'>ABOUT SEEDRA</li>
                        <span className='text-[#4FA083] hidden sm:flex'>|</span>
                        <li className='font-lexand text-[12px] sm:text-sm tracking-[-3.5%] text-[#70737C] cursor-pointer duration-200 hover:scale-[1.03] hover:text-colorGreen'>OUR BLOG</li>
                    </ul>
                    <img width={125} src={SiteLogo} alt="" />
                    <ul className='flex flex-wrap items-center justify-center gap-4 sm:gap-8'>
                        <Link to={'/contact'} className='uppercase font-lexand text-[12px] sm:text-sm tracking-[-3.5%] text-[#70737C] cursor-pointer duration-200 hover:scale-[1.03] hover:text-colorGreen'>Contacts</Link>
                        <span className='text-[#4FA083] hidden sm:flex'>|</span>
                        <li className='uppercase font-lexand text-[12px] sm:text-sm tracking-[-3.5%] text-[#70737C] cursor-pointer duration-200 hover:scale-[1.03] hover:text-colorGreen'>Terms&Conditions</li>
                        <span className='text-[#4FA083] hidden sm:flex'>|</span>
                        <li className='uppercase font-lexand text-[12px] sm:text-sm tracking-[-3.5%] text-[#70737C] cursor-pointer duration-200 hover:scale-[1.03] hover:text-colorGreen'>Privacy Policy</li>
                    </ul>
                </article>
                <article className='py-5 flex flex-wrap items-center justify-between gap-5'>
                    <div className='flex items-center gap-6'>
                        <Link to={'https://www.instagram.com/1umarov.jasur/'} target='_blank'>
                            <PiInstagramLogoFill className='text-2xl text-colorGreen hover:text-pink-500 duration-200 hover:scale-[1.1]' />
                        </Link>
                        <Link to={'https://www.facebook.com'} target='_blank'>
                            <MdFacebook className='text-2xl text-colorGreen hover:text-blue-600 duration-200 hover:scale-[1.1]' />
                        </Link>
                    </div>
                    <p className='font-lexand text-sm text-[#70737C]'>All rights reserved</p>
                </article>
            </div>
        </footer>
    )
}

export default Footer
