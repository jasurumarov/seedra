import React, { useEffect } from 'react'

// Images
import BgImg from '../../assets/images/hero-bg.png'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';
Aos.init()

const Hero: React.FC = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <section className='mt-8'>
            <div className="container">
                <div data-aos="fade-right" className='rounded-3xl hero pt-14 pb-16 px-6 flex flex-col items-center bg-no-repeat' style={{ background: `url(${BgImg})` }}>
                    <h2 className='mb-3 text-center font-lexand600 text-[32px] md:text-[48px] text-colorBlack'>Who we are and what we do</h2>
                    <p className='text-center font-lexand text-colorBlack max-w-[560px] '>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
