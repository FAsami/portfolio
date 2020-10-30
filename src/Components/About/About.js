import React from 'react'
import './About.css'
import image from "../../img/foysal_rounded.png"
import SocialLink from './SocialLink';
import Skills from './Skills';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div
            className='portfolio container'
            style={{ paddingLeft: '100px', paddingTop: '70px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h3 className="text-center pb-3">About </h3>

            <div className="card p-5 card-shadow">
                <div className='d-flex justify-content-center'>
                    <img src={image} className='image-fluid person-img' alt="Foysal Ahammed" />
                </div>
                <div className='text-center my-3'>
                    <h4 className=" font-weight-bold">Foysal Ahammed</h4>
                    <small className='text-muted '>Front End Developer</small>
                </div>
                <SocialLink />
                <div className='text-center px-md-3 pt-3'>
                    <p>Enthusiastic and passionate Front end developer with problem solving skills, and always looking to develop high quality web applications</p>
                    <a href="https://drive.google.com/file/d/1DnfnHsy0C2LNdq4adc6VuDyIr7B2eTcZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline-dark rounded-0">Download CV</button>
                    </a>
                    <Skills />
                </div>
                <div className='mt-5 d-flex justify-content-center'>
                    <Link to='/portfolio'>
                        <button className="btn btn-outline-dark rounded-0">PROJECTS</button>
                    </Link>
                    <Link to='/blogs'>
                        <button className="btn btn-outline-dark rounded-0 mx-1">BLOGS</button>
                    </Link>
                    <Link to='/contact'>
                        <button className="btn btn-outline-dark rounded-0">CONTACT</button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default About;
