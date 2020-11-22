import React from 'react'
import './DownloadCV.css'
import { FiDownload } from 'react-icons/fi'
function DownloadCV() {
    return (
        <div className='cv-container d-none d-md-block'>
            <a href="https://drive.google.com/file/d/1DnfnHsy0C2LNdq4adc6VuDyIr7B2eTcZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-sm btn-outline-dark  rounded-0"><FiDownload /> Resume</button>
            </a>
        </div>
    )
}

export default DownloadCV;
