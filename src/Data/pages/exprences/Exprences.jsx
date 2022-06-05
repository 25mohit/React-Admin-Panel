import React from 'react'
import { VerticalTimelineElement, VerticalTimeline} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {HiOutlineDesktopComputer} from 'react-icons/hi'

export const Exprences = () => {
    return(
        <div className="exprences-div">
                <div className="container-exprences">
                    <VerticalTimeline lineColor='#6E4FEB'>
                            <VerticalTimelineElement id='hjhjkhkjh'
                            className='vertical-timeline-element--education' 
                            date='2022'
                            iconStyle={{background: "#6E4FEB", color:"fff"}}
                            icon={<HiOutlineDesktopComputer className='icon-computer'/>}
                            > 
                            <h3 className="vertical-timeline-element-title">Fresher</h3>
                            <p>Looking to work in a challenging and responsible position in a professional organization as a Front-end-Developer</p>
                            </VerticalTimelineElement>


                            <VerticalTimelineElement 
                            className='vertical-timeline-element--education' 
                            date='2022'
                            iconStyle={{background: "#6E4FEB", color:"fff"}}
                            icon={<HiOutlineDesktopComputer className='icon-computer'/>}
                            > 
                            <h3 className="vertical-timeline-element-title">Skills</h3>
                            <p>Have good skills in ReactJS, JavaScript, SCSS, HTML, NodeJS</p>
                            <p>Also have good skills in many softwares like, Photoshop, Dreamviewer, VS Code, Adobe Lightroom</p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement 
                            className='vertical-timeline-element--education' 
                            date='2016 - 2022'
                            iconStyle={{background: "#6E4FEB", color:"fff"}}
                            icon={<HiOutlineDesktopComputer className='icon-computer'/>}
                            > 
                            <h3 className="vertical-timeline-element-title">Online eCommerce Store Manager</h3>
                            <p>eBay, Etsy, Amazon</p>
                            </VerticalTimelineElement>
                            
                    </VerticalTimeline>
                </div>
        </div>
    )
}