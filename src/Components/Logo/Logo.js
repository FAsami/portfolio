import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to='/'>
            <div style={{ position: 'fixed', top: '10px', left: '10px' }}>
                <p className='py-1 px-2 font-weight-bold' style={{ border: '5px solid #192A56' }}>{`FOYSAL`}</p>
            </div>
        </Link>
    )
}

export default Logo
