import React from 'react'
import './Blogs.css'
import Blog from './Blog'
import { blogsData } from './blogData'
import { motion } from 'framer-motion'


function Blogs() {

    return (
        <div className='container'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                style={{ paddingTop: '50px' }}
                className='sidebar-gap'
            >
                <h3 className="text-center">Blogs({blogsData.length})</h3>
                <div className="row">
                    {blogsData.map(blog =>
                        <Blog key={blog.id} blog={blog} />)}
                </div>
            </motion.div>
        </div>
    )
}

export default Blogs