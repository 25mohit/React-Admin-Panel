import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProjectCard = ({title, img, id, link}) => {
    const navigate = useNavigate()
  return (
    <div className='project-card-div'>
            <div className="container-project-card">
                    <h1 className="project-head" onClick={ () => {navigate('/project/'+ id)}}>{title}</h1>
                    <img src={ img} alt="" className='card-img' onClick={ () => {navigate('/project/'+ id)}}/>
                    <div className="links-div">
                        <div><a className='project-link' href={link} target='_blank'>Project Link</a> </div>
                        <div><p className="detail-link" onClick={ () => {navigate('/project/'+ id)}}>Project Details</p> </div>
                    </div>
            </div>
    </div>
  )
}
