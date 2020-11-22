import React from 'react'
import './sidebar.css';
import { AiFillHome, AiFillRead } from 'react-icons/ai'
import { FaEnvelope, FaFolder } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link, NavLink, useLocation } from 'react-router-dom'

function Sidebar() {
    const { pathname } = useLocation();
    return (
        <div className=' d-none d-md-block sidebar text-center'>
            <ul style={{ paddingLeft: '15px', paddingRight: '0px' }}>
                <li>
                    <Link className={pathname === '/' ? 'activePage' : null} to='/' ><AiFillHome size='23px' /><br />
                        <small className='icon-text'>HOME</small>
                    </Link>
                </li>
                <li>
                    <NavLink activeClassName='activePage' to='/portfolio'><FaFolder size='23px' /> <br />
                        <small className='icon-text'>PROJECTS</small>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='activePage' to='/about'>
                        <BsFillPersonFill size='23px' /> <br />
                        <small className='icon-text'>ABOUT</small> </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='activePage' to='/contact'><FaEnvelope size='23px' /><br />
                        <small className='icon-text'>CONTACT</small>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='activePage' to='/blogs'><AiFillRead size='23px' /> <br />
                        <small className='icon-text'>BLOGS</small> </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
