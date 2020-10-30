import React from 'react'
import './Blogs.css'
import Blog from './Blog'
import { blogsData } from './blogData'

function Blogs() {
    return (
        <div className='blogs container' style={{ paddingLeft: '100px', paddingTop: '50px' }}>
            <h3 className="text-center">Blogs({blogsData.length})</h3>
            <div className="row">
                {blogsData.map(blog => <Blog key={blog.id} blog={blog} />)}
            </div>

        </div>
    )
}

export default Blogs