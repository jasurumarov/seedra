import React, { useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Backtop: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const HandleTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <Link onClick={HandleTop} to={''} className={`opacity-100 fixed right-[2%] bottom-[-10%] bg-white w-14 h-14 flex items-center justify-center text-xl rounded-[50%] duration-500 shadow-shadowBacktop text-colorBlack ${visible ? 'bottom-[2%]' : 'bottom-[-10%]'}`}><FaAngleUp /></Link>
    )
}

export default Backtop