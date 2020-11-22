import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AiFillHome, AiFillRead } from 'react-icons/ai'
import { FaEnvelope, FaFolder } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi'

function Topbar() {
    const { pathname } = useLocation();

    const navClass = `d-flex flex-column justify-content-center align-items-center`;
    return (
        <div className='d-md-none d-flex align-items-center w-100 bg-light' style={{ position: 'fixed', zIndex: '10' }}>
            <div className='px-2 pt-2'>
                <NavLink
                    className={pathname === '/' ? `${navClass} activePage ` : `${navClass}`} to='/'>
                    <AiFillHome size='23px' /><br />
                </NavLink>
            </div>
            <div className='px-2 pt-2'>
                <NavLink
                    className={navClass}
                    activeClassName='activePage' to='/portfolio'>
                    <FaFolder size='23px' /><br />
                </NavLink>
            </div>

            <div className='px-2 pt-2'>
                <NavLink
                    className={navClass}
                    activeClassName='activePage'
                    to='/about'>
                    <BsFillPersonFill size='23px' /><br />
                </NavLink>
            </div>
            <div className='px-2 pt-2'>
                <NavLink
                    activeClassName='activePage'
                    className={navClass}
                    to='/contact'>
                    <FaEnvelope size='23px' /><br />
                </NavLink>
            </div>
            <div className='px-2 pt-2'>
                <NavLink
                    className={navClass}
                    activeClassName='activePage'
                    to='/blogs'>
                    <AiFillRead size='23px' /><br />
                </NavLink>
            </div>
            <div className='px-4 pt-2 ml-auto'>
                <a
                    href="https://drive.google.com/file/d/1DnfnHsy0C2LNdq4adc6VuDyIr7B2eTcZ/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                    className={navClass}
                >
                    <FiDownload size='23px' /><br />
                </a>
            </div>
        </div>
    )
}

export default Topbar
