import React from 'react'
import BgImg from '../../assets/images/hero-bg.png'

const Hero: React.FC = () => {
    return (
        <section className='mt-8'>
            <div className="container">
                <div className='hero pt-14 pb-16 flex flex-col items-center bg-no-repeat' style={{ background: `url(${BgImg})` }}>
                    <h2 className='mb-3 text-center	font-lexand600 text-[48px] text-colorBlack'>Who we are and what we do</h2>
                    <p className='text-center font-lexand text-colorBlack max-w-[560px] '>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
