import React, { useState } from 'react'
import { ProjectCard } from '../../components/projectCard/ProjectCard'
import {projectList} from '../../asset/ProjectList'
import ReactPaginate from 'react-paginate'

export const Projects = () => {
    const [pageNumber, setPageNumber] = useState(0)

    const projectsPerPage = 8;
    const pagesVisited = pageNumber * projectsPerPage;
    const displayProjects = projectList.slice(pagesVisited, pagesVisited + projectsPerPage).map((project, idx) => {
        return(

            <ProjectCard id ={ idx } key={ idx }
            title = {project.title} 
            img ={project.image}
            link={ project.pLink}
            />
            )
    })
    const pageCount = Math.ceil(projectList.length / projectsPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    return(
        <div className="projects-div">
            <div className="projects-container">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationButtons"}
                  previousClassName={"previousButton"}
                  nextClassName={"nextButton"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive "}
                />
                  { displayProjects }
            </div>
        </div>
    )
}