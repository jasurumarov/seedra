import React from 'react'

// Components
import Hero from '../../components/hero/Hero'
import Story from '../../components/story/Story'
import Users from '../../components/users/Users'

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Story/>
            <Users/>
        </main>
    )
}

export default Home
