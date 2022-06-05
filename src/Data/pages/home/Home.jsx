import React from 'react'
import '../../styles/Style.css'
import me from '../../images/me.jpg'
import { Link } from 'react-router-dom'

export const Home = () => {
    return(
        <div className="home-div">
                <div className="container-home">
                        <div className="left-section">
                                <div className="info-container">
                                        <h1 className='h1-info'>i m <span>Mohit Agarwal </span>a <span>Front-End-Developer</span></h1>
                                        <p className="sub-heading"><span className="line-break">Self-motivated team player, seeking a position as a Front-end-Developer   where I can apply my knowledge of ReactJS web design with my abilities to meet client needs and exceed their expectations.
                                        </span> <span className='resume-link'>Download my Resume</span></p>   
                                </div>
                        </div>
                        <div className="right-section">
                                <div className="img-container">
                                    <img src={ me } alt="" className="my-image" />
                                </div>
                        </div>
                </div>
        </div>
    )
}