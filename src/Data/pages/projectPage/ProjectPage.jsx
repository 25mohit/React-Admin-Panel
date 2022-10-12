import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../../asset/ProjectList'
import { ImageModel } from '../../components/imageModel/ImageModel'

export const ProjectPage = () => {
    const [imageModel, setImageModel] = useState(false)
    const [imageModel1, setImageModel1] = useState(false)
    const [imageModel2, setImageModel2] = useState(false)
    const [imageModel3, setImageModel3] = useState(false)
    const {id } = useParams()
    
    const projectLists = projectList[id]
  return (
    <div className='project-page-div'>
        <div className="container-project-page">
                <div className="left-section">
                        <div className="heading-project-page">
                            <h1 className='h1-heading-text-project'>{projectLists.title}</h1>
                            <p className="project-detail-head">Project Details</p>
                            <ul>
                              <li className="project-details">{projectLists.detail}</li>
                              <li className="project-details">{projectLists.detail2}</li>
                            </ul>
                            <p className="extra-details">This Project is Completly Developed in <span className="extra">ReactJS</span> Library, with using <span className="extra">ReactJS Hooks</span> and other dependencies, also with the use of <span className="extra">HTML</span><span className="extra">SCSS</span><span className="extra">JavaScript</span></p>
                            <p className="link-project-live">This Project is Live you can <span><a href={projectLists.pLink} target='_blank'>See here</a></span></p>
                            <p className="github-link"><span><a href={projectLists.gLink} target='_blank'>GitHub Repository</a></span></p>
                        </div>
                </div>
                <div className="right-section">
                    <p className="images-text">Project Screen-shoots</p>
                    <img className='project-page-img' src={projectLists.image} alt="" onClick={() => {setImageModel(true)}}/>
                    <img className='project-page-img' src={projectLists.image1} alt="" onClick={() => {setImageModel1(true)}} />
                    <img className='project-page-img' src={projectLists.image2} alt="" onClick={() => {setImageModel2(true)}} />
                    <img className='project-page-img' src={projectLists.image3} alt="" onClick={() => {setImageModel3(true)}} />
                {imageModel && <ImageModel id={projectLists.image} setImageModel ={setImageModel}/>}
                {imageModel1 && <ImageModel id={projectLists.image1} setImageModel ={setImageModel1}/>}
                {imageModel2 && <ImageModel id={projectLists.image2} setImageModel ={setImageModel2}/>}
                {imageModel3 && <ImageModel id={projectLists.image3} setImageModel ={setImageModel3}/>}
                </div>
        </div>
    </div>
  )
}
