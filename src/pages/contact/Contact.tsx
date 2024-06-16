import React, { useEffect } from 'react'
import ContactForm from '../../components/contactForm/ContactForm'

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <ContactForm />
        </main>
    )
}

export default Contact
