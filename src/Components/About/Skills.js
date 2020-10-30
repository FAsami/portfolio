import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiReactrouter } from 'react-icons/si'
import SkillIcon from './SkillIcon';

function Skills() {
    return (
        <div>
            <h5 className="text-center font-weight-bold pt-5">My skills</h5>
            <div className="d-flex justify-content-center py-3">
                <SkillIcon icon={<SiJavascript size='26px' />} label='JavaScript' />
                <SkillIcon icon={<FaReact size='26px' />} label='REACT JS' />
                <SkillIcon icon={<FaNodeJs size='26px' />} label='NODE JS' />
                <SkillIcon icon={<SiMongodb size='26px' />} label='Mongo DB' />
            </div>
            <div className="d-flex justify-content-center py-3">
                <SkillIcon icon={<SiReactrouter size='26px' />} label='React router' />
                <SkillIcon icon={<FaSass size='26px' />} label='SASS' />
                <SkillIcon icon={<FaCss3 size='26px' />} label='CSS' />
                <SkillIcon icon={<FaHtml5 size='26px' />} label='HTML' />
            </div>
        </div>
    )
}

export default Skills
