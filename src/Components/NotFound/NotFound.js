import { motion } from 'framer-motion'
import React from 'react'

function NotFound() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className='sidebar-gap'
        >
            <h3 className="display-4 text-center m-5">
                404 ! <br /> Page not found.
            </h3>
        </motion.div>
    )
}

export default NotFound
