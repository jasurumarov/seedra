import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';
Aos.init()

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Interfaces
interface UserSchema {
    id: string;
    image: string;
    firstName: string;
    lastName: string;
    company: {
        department: string;
    };
}

// API
const API_URL: string = "https://dummyjson.com"

const Users: React.FC = () => {
    const [usersData, setUsersData] = useState<null | UserSchema[]>(null)

    useEffect(() => {
        axios.get(`${API_URL}/users?limit=12`)
            .then((res) => setUsersData(res.data.users))
    }, [])

    let users: JSX.Element[] | undefined = usersData?.map((user: UserSchema) => (
        <SwiperSlide key={user.id} className='hover:shadow-shadowHeader flex flex-col justify-center items-center duration-200 rounded-xl overflow-hidden pb-5'>
            <div className='overflow-hidden flex items-center justify-center sm:w-[255px] sm:h-[255px]'>
                <img className='sm:w-[255px] w-40 h-40 overflow-hidden sm:h-[255px] mb-4 duration-200 hover:scale-[1.02]' src={user.image} alt='user image' />
            </div>
            <h3 className='text-center font-lexand600 text-[18px] sm:text-[22px] text-colorBlack mb-4'>{user.firstName} {user.lastName}</h3>
            <p className='text-center font-lexand text-[16px] text-colorBlack'>{user.company.department}</p>
        </SwiperSlide>
    ))
    return (
        <section className='mb-20'>
            <div data-aos={"zoom-in-up"} data-aos-duration="600" data-aos-anchor-placement="top-center" className="container">
                <h2 className='font-lexand600 text-[28px] sm:text-[36px] text-colorBlack tracking-[5%] text-center mb-8'>Meet our team</h2>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        782: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1094: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className='pb-16 flex flex-wrap gap-[30px]'>
                    {users}
                </Swiper>
            </div>
        </section>
    )
}

export default Users
