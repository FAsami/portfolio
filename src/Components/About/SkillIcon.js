import React from 'react'

function SkillIcon({ icon, label }) {
    return (
        <div className='skill px-md-1 px-md-3'>
            {icon}<br />
            <small className='icon-text'>{label}</small>
        </div>
    )
}

export default SkillIcon;
