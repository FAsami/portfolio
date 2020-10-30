import React from 'react'


function Blog(props) {
    const { title, description, link, image } = props.blog;
    return (
        <div
            className="col-md-6 my-3">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="card card-shadow p-4">
                    <div>
                        <img src={image} className='w-100 border' alt={title} />
                    </div>
                    <h5 className="card-title font-weight-bold pt-2">{title}</h5>
                    <p>{description}</p>
                    <div className="d-flex">
                        <div>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <button className="btn-outline-dark btn-sm btn mr-1  rounded-0">Read more </button>
                            </a>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Blog;
