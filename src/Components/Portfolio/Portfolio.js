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
            <h3 className="text-center py-3">Projects</h3>
            <div className="row">
                {projectData.map(project => <Project key={project.id} project={project} />)}
            </div>
            <div className='py-5 text-center'>
                <a href="http://github.com/FAsami" target="_blank" rel="noopener noreferrer">
                    <btn className="btn btn-outline-dark rounded-0">See all projects in Github</btn>
                </a>
            </div>
        </motion.div>
    )
}

export default Portfolio
