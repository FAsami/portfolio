import React from 'react'
import './Blogs.css'
import Blog from './Blog'
import { blogsData } from './blogData'
import { motion } from 'framer-motion'

function Blogs() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className='blogs container' style={{ paddingLeft: '100px', paddingTop: '50px' }}>
            <h3 className="text-center">Blogs({blogsData.length})</h3>
            <div className="row">
                {blogsData.map(blog => <Blog key={blog.id} blog={blog} />)}
            </div>

        </motion.div>
    )
}

export default Blogs