import React from 'react'


function Project(props) {
    const { github, website, image, title, description } = props.project;
    return (
        <div className="col-md-6 my-3">
            <div className="card  p-4">
                <div>
                    <img src={image} className='portfolio-img w-100 border' alt={title} />
                </div>
                <h5 className="card-title font-weight-bold pt-2">{title}</h5>
                <p>{description}</p>
                <div className="d-flex">
                    <div>
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <button className="btn-dark btn-sm btn mr-1  rounded-0">Github</button>
                        </a>
                    </div>
                    <div>
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            <button className="btn-outline-dark btn-sm btn   rounded-0">Live Website</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
