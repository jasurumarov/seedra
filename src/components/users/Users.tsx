import React from 'react'
// import axios from 'axios'

// const API_URL: string = "https://dummyjson.com"

const Users: React.FC = () => {

    // useEffect(() => {
    //     axios.get(`${API_URL}/users`)
    //         .then((res) => console.log(res.data.users))
    // }, [])
    return (
        <section>
            <div className="container">
                <h2 className='font-lexand600 text-[36px] text-colorBlack tracking-[5%] text-center mb-20'>Meet our team</h2>
                <div className='flex flex-wrap justify-between gap-[30px]'>
                    <div>
                        <img src="" alt="" />
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Users
