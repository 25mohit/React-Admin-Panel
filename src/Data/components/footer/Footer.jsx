import React, { useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { CgBoy } from 'react-icons/cg'
// import codementor from '../../images/icons/codementor.png'
import { AboutMe } from '../aboutMe/AboutMe'

export const Footer = () => {
  const [showAboutMe, setShowAboutMe] = useState(false)

  return (
    <div className='footer-div'>
            <div className="container-footer">
                <span className='span-icon'><a href='https://github.com/25mohit' target="_blank"><BsGithub className='github'/></a> </span>
                <span className='span-icon'><a href='https://www.linkedin.com/in/agarwal24/' target="_blank"><BsLinkedin className='linkdin'/></a> </span>
                <span className='span-icon'><a href='https://www.instagram.com/im_hit_/' target="_blank"><BsInstagram className='instagram'/></a> </span>
                <span className='span-icon'> <a href='https://www.facebook.com/mohit724agarwal' target="_blank"><FaFacebookSquare className='facebook'/></a> </span>
                <span className='span-icon'><a href='https://twitter.com/mo_hit24' target="_blank"><FaTwitter className='twitter'/></a> </span> 
                {/* <span className='span-icon'><a href='https://www.codementor.io/@24mohit' target="_blank">
                    <img src={ codementor } alt="" className='logo-img'/>
                  </a> </span>  */}
                <span className='span-icon'><CgBoy className='boy' onClick={() => {setShowAboutMe(true)}}/></span>
                 </div>
                 { showAboutMe && <AboutMe setShowAboutMe={ setShowAboutMe } /> }
                 
    </div>
  )
}
