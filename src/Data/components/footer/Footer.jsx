import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='footer-div'>
            <div className="container-footer">
                <span className='span-icon'> <BsGithub className='github'/></span>
                <span className='span-icon'><BsLinkedin className='linkdin'/></span>
                <span className='span-icon'><BsInstagram className='instagram'/></span>
                <span className='span-icon'> <FaFacebookSquare className='facebook'/></span>
                <span className='span-icon'><FaTwitter className='twitter'/></span> </div>
    </div>
  )
}
