import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FcDepartment } from 'react-icons/fc'

interface UserSchema {
    id: string;
    image: string;
    firstName: string;
    lastName: string;
    company: {
        department: string;
    };
}

const API_URL: string = "https://dummyjson.com"

const Users: React.FC = () => {
    const [usersData, setUsersData] = useState<null | UserSchema[]>(null)

    useEffect(() => {
        axios.get(`${API_URL}/users?limit=4`)
            .then((res) => setUsersData(res.data.users))
    }, [])
    
    let users: JSX.Element[] | undefined = usersData?.map((user: UserSchema) => (
        <div key={user.id} className='hover:shadow-shadowHeader rounded-xl overflow-hidden pb-5'>
            <div className='overflow-hidden w-[255px] h-[255px]'>
                <img className='w-[255px] overflow-hidden h-[255px] mb-4 duration-200 hover:scale-[1.02]' src={user.image} alt='user image' />
            </div>
            <h3 className='text-center font-lexand600 text-[22px] text-colorBlack mb-4'>{user.firstName} {user.lastName}</h3>
            <p className='text-center font-lexand text-[16px] text-colorBlack'>{user.company.department}</p>
        </div>
    ))
    return (
        <section>
            <div className="container">
                <h2 className='font-lexand600 text-[36px] text-colorBlack tracking-[5%] text-center mb-16'>Meet our team</h2>
                <div className='flex flex-wrap gap-[30px]'>
                    {users}
                </div>
            </div>
        </section>
    )
}

export default Users
