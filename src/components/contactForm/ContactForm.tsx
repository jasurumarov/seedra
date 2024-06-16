import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';
Aos.init()

// Images
import ContactBg from '../../assets/images/contact-bg.png'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'

const ContactForm: React.FC = () => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const message = formData.get('message') as string

        if (name.trim() && email.trim() && message.trim()) {
            console.log({ name, email, message })
            const formElement = e.currentTarget as HTMLFormElement
            formElement.reset()
        } else {
            window.confirm("Input can't be empty")
        }


    }



    return (
        <section data-aos={'fade-right'} className='mt-14 mb-20'>
            <div className="container">
                <div className='contact rounded-[50px] overflow-hidden py-8 lg:pl-14 md:pl-10 md:pr-10 pl-6 pr-6 flex flex-wrap items-center justify-between gap-5' style={{ background: `url(${ContactBg})` }}>
                    <div className='flex flex-wrap items-center  lg:flex-col gap-6 lg:gap-40'>
                        <div>
                            <h2 className='font-lexand600 text-[36px] sm:text-[48px] text-colorBlack mb-3.5'>Contact us</h2>
                            <p className=' md:max-w-[252px] font-lexand text-[16px] text-colorBlack'>Send for us your request and we will get in touch with you as soon as possible</p>
                        </div>

                        <div className='flex flex-wrap md:flex-col gap-5'>
                            <div className='flex items-center gap-[22px]'>
                                <div className='w-14 h-14 flex items-center justify-center bg-white rounded-2xl'>
                                    <BiSolidPhoneCall className='text-2xl text-colorGreen' />
                                </div>
                                <Link to={'tel: +380 98 782 82 23'} className='font-lexand600 text-[16px] md:text-xl text-[#70737C]'>+380 98 782 82 23</Link>
                            </div>
                            <div className='flex items-center gap-[22px]'>
                                <div className='w-14 h-14 flex items-center justify-center bg-white rounded-2xl'>
                                    <IoMdMail className='text-2xl text-colorGreen' />
                                </div>
                                <Link to={'mail: mailmail@gmail.com'} className='font-lexand600 text-[16px] md:text-xl text-[#70737C]'>mails@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='max-w-[1000px] lg:max-w-[536px] w-full bg-white rounded-[29px] py-[26px] px-8'>
                        <div className='flex flex-col gap-[4px] mb-5'>
                            <label htmlFor="name" className='font-lexand text-[#70737C] text-sm'>Name</label>
                            <input required id='name' type="name" name='name' placeholder='Your name' className='w-full h-14 px-6 rounded-md text-colorBlack outline-none border border-[#EFEFEF] border-solid' />
                        </div>
                        <div className='flex flex-col gap-[4px] mb-5'>
                            <label htmlFor="email" className='font-lexand text-[#70737C] text-sm'>Email</label>
                            <input required id='email' type="email" name='email' placeholder='Your email' className='w-full h-14 px-6 rounded-md text-colorBlack outline-none border border-[#EFEFEF] border-solid' />
                        </div>
                        <div className='flex flex-col gap-[4px] mb-3.5'>
                            <label htmlFor="message" className='font-lexand text-[#70737C] text-sm'>Message</label>
                            <textarea required name="message" id="message" placeholder='Your message' rows={4} className='w-full py-3.5 resize-none px-6 rounded-md text-colorBlack outline-none border border-[#EFEFEF] border-solid'></textarea>
                        </div>
                        <div className='flex flex-wrap sm:flex-nowrap items-center gap-5'>
                            <button className='w-full sm:w-[160px] h-[51px] flex items-center justify-center bg-colorGreen rounded-lg text-white font-lexand duration-200 active:scale-[0.97]'>Send request</button>
                            <p className='max-w-[502px] sm:order-1 -order-1 md:max-w-[222px] text-[12px] md:text-sm text-[#70737C] font-lexand'>By sending request you agree to out Pivacy&Policy</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
