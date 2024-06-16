import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

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
        axios.get(`${API_URL}/users`)
            .then((res) => setUsersData(res.data.users))
    }, [])

    let users: JSX.Element[] | undefined = usersData?.map((user: UserSchema) => (
        <SwiperSlide key={user.id} className='hover:shadow-shadowHeader duration-200 rounded-xl overflow-hidden pb-5'>
            <div className='overflow-hidden w-[255px] h-[255px]'>
                <img className='w-[255px] overflow-hidden h-[255px] mb-4 duration-200 hover:scale-[1.02]' src={user.image} alt='user image' />
            </div>
            <h3 className='text-center font-lexand600 text-[22px] text-colorBlack mb-4'>{user.firstName} {user.lastName}</h3>
            <p className='text-center font-lexand text-[16px] text-colorBlack'>{user.company.department}</p>
        </SwiperSlide>
    ))
    return (
        <section className='mb-20'>
            <div className="container">
                <h2 className='font-lexand600 text-[36px] text-colorBlack tracking-[5%] text-center mb-16'>Meet our team</h2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
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
