import React from 'react'
import { ProjectCard } from '../../components/projectCard/ProjectCard'
import {projectList} from '../../asset/ProjectList'

export const Projects = () => {
    return(
        <div className="projects-div">
            <div className="projects-container">
                    {
                        projectList.map((project, idx) => <ProjectCard id ={ idx } 
                        title = {project.title} 
                        img ={project.image}
                        link={ project.pLink}
                          />)
                    }
            </div>
        </div>
    )
}