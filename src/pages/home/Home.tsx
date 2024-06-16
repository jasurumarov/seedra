import React, { useEffect } from 'react'

// Components
import Hero from '../../components/hero/Hero'
import Story from '../../components/story/Story'
import Users from '../../components/users/Users'

const Home: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <Hero />
            <Story />
            <Users />
        </main>
    )
}

export default Home
