import React from 'react'
import './DownloadCV.css'

function DownloadCV() {
    return (
        <div className='cv-container'>
            <a href="https://drive.google.com/file/d/1DnfnHsy0C2LNdq4adc6VuDyIr7B2eTcZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-dark  rounded-0">Download CV</button>
            </a>
        </div>
    )
}

export default DownloadCV;
