import { motion } from 'framer-motion'
import React from 'react'
import './portfolio.css'
import Project from './Project'
import { projectData } from './ProjectData'

function Portfolio() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            className='portfolio container'
            style={{ paddingLeft: '100px', paddingTop: '50px' }}>
            <div className="row">
                {projectData.map(project => <Project key={project.id} project={project} />)}
            </div>
        </motion.div>
    )
}

export default Portfolio
