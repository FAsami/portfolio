import React from 'react'
import './Blogs.css'
import Blog from './Blog'
const blogsData = [
    {
        id: 0,
        title: "Blog title",
        description: 'blog description ',
        image: 'https://dummyimage.com/400x200/000/fff',
        link: 'Blog Link',
    },
    {
        id: 1,
        title: "Blog title",
        description: 'blog description ',
        image: 'https://dummyimage.com/400x200/000/fff',
        link: 'Blog Link',
    },
    {
        id: 2,
        title: "Blog title",
        description: 'blog description ',
        image: 'https://dummyimage.com/400x200/000/fff',
        link: 'Blog Link',
    }
]
function Blogs() {
    return (
        <div className='blogs container' style={{ paddingLeft: '100px', paddingTop: '50px' }}>
            <div className="row">
                {blogsData.map(blog => <Blog key={blog.id} blog={blog} />)}
            </div>

        </div>
    )
}

export default Blogs