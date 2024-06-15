import React from 'react'
import { Link } from 'react-router-dom'

// Icons
import SiteLogo from '../../assets/icons/site-logo.svg'
import { FiSearch } from 'react-icons/fi'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { MdFacebook } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import { RiShoppingCart2Line } from 'react-icons/ri'



const Header: React.FC = () => {
    return (
        <header className='font-lexand py-4 shadow-shadowHeader'>
            <div className="container">
                <nav className='flex items-center justify-between gap-5'>
                    <Link to={'/'}>
                        <img src={SiteLogo} alt="SiteLogo" />
                    </Link>
                    <ul className='flex items-center gap-4'>
                        <Link to={'/'} className='text-sm text-colorGray duration-200 hover:scale-[1.03] hover:text-black'>ALL PRODUCTS</Link>
                        <span className='text-sm text-[#EFEFEF]'>|</span>
                        <Link to={'/about'} className='text-sm text-colorGray duration-200 hover:scale-[1.03] hover:text-black'>ABOUT SEEDRA</Link>
                        <span className='text-sm text-[#EFEFEF]'>|</span>
                        <Link to={'/blog'} className='text-sm text-colorGray duration-200 hover:scale-[1.03] hover:text-black'>OUR BLOG</Link>
                        <span className='text-sm text-[#EFEFEF]'>|</span>
                        <Link to={'/contact'} className='text-sm text-colorGray duration-200 hover:scale-[1.03] hover:text-black'>CONTACTS</Link>
                    </ul>
                    <div className='flex items-center gap-[13px]'>
                        <div className='flex items-center gap-3'>
                            <Link to={'https://www.instagram.com/1umarov.jasur/'} target='_blank'>
                                <PiInstagramLogoFill className='text-xl text-[#B7B9BD] hover:text-pink-500 duration-200 hover:scale-[1.1]' />
                            </Link>
                            <Link to={'https://www.facebook.com'} target='_blank'>
                                <MdFacebook className='text-xl text-[#B7B9BD] hover:text-blue-600 duration-200 hover:scale-[1.1]' />
                            </Link>
                        </div>
                        <form className='relative'>
                            <FiSearch className='absolute top-[15px] text-lg left-5 text-colorGray' />
                            <input type="search" placeholder='Search...' className='w-[285px] h-12 border-solid	border border=[#EFEFEF] outline-none rounded-[71px] pl-[60px] py-3 pr-3 text-sm text-colorBlack' />
                        </form>
                        <div className='flex items-center gap-5'>
                            <Link to={'/wishlist'}>
                                <FaRegHeart className='text-colorGreen text-xl' />
                            </Link>
                            <Link to={'/cart'}>
                                <RiShoppingCart2Line className='text-colorGreen text-xl' />
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
