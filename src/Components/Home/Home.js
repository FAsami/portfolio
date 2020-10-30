import React from 'react'
import "./Home.css"
import image from '../../img/foysal_rounded.png'
import { Link } from 'react-router-dom';
import SocialLink from '../About/SocialLink';
import { motion } from 'framer-motion';
function Home() {
    return (
        <motion.div
            className='home-container bg-light d-flex justify-content-center align-items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='d-md-flex align-items-center' style={{ marginLeft: '100px' }}>
                <div>
                    <img src={image} className='personal-image' alt="Foysal Ahammed" />
                </div>
                <div className='ml-2'>
                    <motion.h1
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className='header-name'>Hi! I'm Foysal
                     </motion.h1>
                    <p className='text-muted'>Front end web Developer</p>
                    <Link to='/contact'><button className="btn btn-dark rounded-0 mr-1 mb-3">HIRE ME</button></Link>
                    <Link to='/portfolio'><button className="btn btn-outline-dark rounded-0 mb-3 pr-4">PORTFOLIO</button></Link>
                    <SocialLink />
                </div>
            </div>
        </motion.div>
    )
}

export default Home;
