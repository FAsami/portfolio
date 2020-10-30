import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa';

function SocialLink() {
    return (
        <div className='d-flex justify-content-center text-center'>
            <div className='px-2'>
                <a href="https://github.com/FAsami" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub size='23px' /><br />
                    <small className='icon-text'>GITHUB</small>
                </a>
            </div>
            <div className='px-2'>
                <a href="https://www.linkedin.com/in/foysal-dev/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size='23px' /><br />
                    <small className='icon-text'>LINKEDIN</small>
                </a>
            </div>
            <div className='px-2'>
                <a href="https://twitter.com/foysal_dev" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size='23px' /><br />
                    <small className='icon-text'>TWITTER</small>
                </a>
            </div>
        </div>
    )
}

export default SocialLink;
